const assert = require('node:assert/strict')
const { readFileSync } = require('node:fs')
const path = require('node:path')
const { test } = require('node:test')
const vm = require('node:vm')
const ts = require('typescript')

const root = path.join(__dirname, '..')
const createdAt = '2023-01-01T00:00:00.000Z'
const updatedAt = '2023-02-01T00:00:00.000Z'
const timestamp = (value) => ({ toDate: () => new Date(value) })

function loadFunctions(records = []) {
  const query = {
    where(field, operator, value) {
      assert.equal(operator, '==')
      records = records.filter((record) => record[field] === value)
      return this
    },
    orderBy() {
      return this
    },
    count() {
      return { get: async () => ({ data: () => ({ count: records.length }) }) }
    },
    async get() {
      return {
        size: records.length,
        docs: records.map((record, index) => ({
          id: String(index),
          data: () => record,
        })),
      }
    },
  }
  const dependencies = {
    'firebase-admin': {
      initializeApp() {},
      firestore: () => ({ collection: () => query }),
    },
    'firebase-functions': {
      region: () => ({ https: { onRequest: (handler) => handler } }),
    },
    'firebase-functions/v2': { setGlobalOptions() {} },
    cors: () => (request, response, next) => next(),
  }
  const exports = {}
  vm.runInNewContext(readFileSync(path.join(root, 'functions/index.js'), 'utf8'), {
    exports,
    require: (name) => {
      assert.ok(name in dependencies, `Unexpected dependency: ${name}`)
      return dependencies[name]
    },
  })
  return exports
}

async function request(handler, route = '') {
  const response = {
    set() {},
    status(code) {
      this.statusCode = code
      return this
    },
    send(body) {
      this.body = JSON.parse(JSON.stringify(body))
    },
  }
  await handler({ method: 'GET', params: { 0: route } }, response)
  assert.equal(response.statusCode, 200)
  return response.body
}

for (const name of ['slide', 'programs']) {
  test(`${name}: returns distinct creation and update dates as JSON strings`, async () => {
    const functions = loadFunctions([
      { createdAt: timestamp(createdAt), updatedAt: timestamp(updatedAt) },
    ])
    const { list } = await request(functions[name])
    assert.equal(list[0].createdAt, createdAt)
    assert.equal(list[0].updatedAt, updatedAt)
  })

  test(`${name}: missing or null dates do not fail the request`, async () => {
    const functions = loadFunctions([
      {},
      { createdAt: null, updatedAt: null },
      { createdAt: timestamp(createdAt) },
      { updatedAt: timestamp(updatedAt) },
    ])
    const { total, list } = await request(functions[name])
    assert.equal(total, 4)
    assert.deepEqual(
      list.map(({ createdAt, updatedAt }) => [createdAt, updatedAt]),
      [['', ''], ['', ''], [createdAt, ''], ['', updatedAt]]
    )
  })

  test(`${name}: an empty collection returns an empty list`, async () => {
    assert.deepEqual(await request(loadFunctions()[name]), { total: 0, list: [] })
  })
}

test('programs/recommend returns only recommended programs with a matching total', async () => {
  const functions = loadFunctions([
    { title: 'Regular', isRecommend: false, updatedAt: timestamp(updatedAt) },
    { title: 'Recommended', isRecommend: true, updatedAt: timestamp(updatedAt) },
  ])
  const { total, list } = await request(functions.programs, 'recommend')
  assert.equal(total, 1)
  assert.deepEqual(list.map((program) => program.title), ['Recommended'])
})

test('programs returns both regular and recommended programs', async () => {
  const functions = loadFunctions([
    { title: 'Regular', isRecommend: false, updatedAt: timestamp(updatedAt) },
    { title: 'Recommended', isRecommend: true, updatedAt: timestamp(updatedAt) },
  ])
  const { total, list } = await request(functions.programs)
  assert.equal(total, 2)
  assert.deepEqual(list.map((program) => program.title), ['Regular', 'Recommended'])
})

function loadHome(fetch) {
  const { outputText } = ts.transpileModule(
    readFileSync(path.join(root, 'app/page.tsx'), 'utf8'),
    { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }
  )
  const exports = {}
  vm.runInNewContext(outputText, {
    exports,
    fetch,
    require: (name) => name === '@/views/home' ? { default: () => null } : require(name),
  })
  return exports.default
}

const emptyResponse = () => ({
  status: 200,
  json: async () => ({ total: 0, list: [] }),
})

test('home starts both API requests before either response arrives', async () => {
  let release
  const pending = new Promise((resolve) => { release = resolve })
  const calls = []
  const home = loadHome(async (url) => {
    calls.push(url)
    await pending
    return emptyResponse()
  })
  const rendering = home()
  const started = calls.length
  release()
  await rendering
  assert.equal(started, 2)
})

test('home requests the same recommend route handled by the API', async () => {
  const calls = []
  const home = loadHome(async (url) => {
    calls.push(new URL(url).pathname)
    return emptyResponse()
  })
  await home()
  assert.deepEqual(calls, ['/slide', '/programs/recommend'])
})
