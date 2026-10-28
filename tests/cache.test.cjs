const assert = require('node:assert/strict')
const { readFileSync } = require('node:fs')
const path = require('node:path')
const { test } = require('node:test')
const vm = require('node:vm')
const ts = require('typescript')

function load(file, dependencies = {}, globals = {}) {
  const { outputText } = ts.transpileModule(
    readFileSync(path.join(__dirname, '..', file), 'utf8'),
    { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }
  )
  const exports = {}
  vm.runInNewContext(outputText, {
    exports, URL, Response, AbortSignal,
    require: (name) => name in dependencies ? dependencies[name] : require(name),
    ...globals,
  })
  return exports
}

const projectId = 'nextjs-freshy-clinic'
const issuer = `https://securetoken.google.com/${projectId}`
const keys = import('jose').then(async (jose) => {
  const { privateKey, publicKey } = await jose.generateKeyPair('RS256')
  const jwk = { ...await jose.exportJWK(publicKey), kid: 'test-key' }
  const verify = load('lib/verify-firebase-token.ts', {
    jose: { ...jose, createRemoteJWKSet: () => jose.createLocalJWKSet({ keys: [jwk] }) },
    '@/config/firebase-config': { firebaseConfig: { projectId } },
  }).verifyFirebaseToken
  const sign = (claims = {}) => new jose.SignJWT({
    auth_time: Math.floor(Date.now() / 1000), ...claims,
  }).setProtectedHeader({ alg: 'RS256', kid: 'test-key' })
    .setIssuer(issuer).setAudience(projectId).setSubject('clinic-admin')
    .setIssuedAt().setExpirationTime('1h')
  return { jose, privateKey, verify, sign }
})

test('Firebase verification accepts a signed token for this project', async () => {
  const { verify, sign, privateKey } = await keys
  const user = await verify(await sign({ email: 'admin@example.invalid' }).sign(privateKey))
  assert.equal(user.sub, 'clinic-admin')
})

for (const [name, alter] of [
  ['expired', (jwt) => jwt.setExpirationTime(1)],
  ['wrong project', (jwt) => jwt.setAudience('another-project')],
  ['wrong issuer', (jwt) => jwt.setIssuer('https://example.invalid')],
  ['future issued time', (jwt) => jwt.setIssuedAt(Math.floor(Date.now() / 1000) + 3600)],
  ['empty subject', (jwt) => jwt.setSubject('')],
]) {
  test(`Firebase verification rejects ${name}`, async () => {
    const { verify, sign, privateKey } = await keys
    await assert.rejects(verify(await alter(sign()).sign(privateKey)))
  })
}

test('Firebase verification rejects forged signatures and future authentication', async () => {
  const { jose, verify, sign, privateKey } = await keys
  const other = await jose.generateKeyPair('RS256')
  await assert.rejects(verify(await sign().sign(other.privateKey)))
  await assert.rejects(verify(await sign({ auth_time: 9999999999 }).sign(privateKey)))
  await assert.rejects(verify('eyJhbGciOiJub25lIn0.eyJzdWIiOiJhZG1pbiJ9.'))
})

test('invalidation requires authentication and preserves the CMS access rule', async () => {
  const { verify, sign, privateKey } = await keys
  const invalidations = []
  const { POST } = load('app/api/revalidate/route.ts', {
    '@/lib/verify-firebase-token': { verifyFirebaseToken: verify },
    'next/cache': { revalidateTag: (...args) => invalidations.push(args) },
  })
  const call = (token) => POST(new Request('http://localhost/api/revalidate', {
    method: 'POST', headers: token ? { Authorization: `Bearer ${token}` } : {},
  }))
  assert.equal((await call()).status, 401)
  assert.equal((await call('fake')).status, 401)
  assert.equal((await call(await sign({ email: 'flanders@example.invalid' }).sign(privateKey))).status, 403)
  assert.equal(invalidations.length, 0)
  const response = await call(await sign().sign(privateKey))
  assert.equal(response.status, 200)
  assert.equal(invalidations[0][0], 'public-content')
  assert.equal(invalidations[0][1].expire, 0)
})

test('CMS save and delete refresh caches; retry does not repeat the write', async () => {
  let attempts = 0
  const warnings = []
  const context = {
    authController: { user: { getIdToken: async () => 'id-token' } },
    snackbarController: { open: (warning) => warnings.push(warning), close() {} },
  }
  const callbacks = load('collections/refresh-public-content.tsx', {
    'firebase/auth': { getAuth: () => ({ currentUser: context.authController.user }) },
  }, {
    fetch: async (url, options) => {
      assert.equal(url, '/api/revalidate')
      assert.equal(options.headers.Authorization, 'Bearer id-token')
      return { ok: ++attempts > 1 }
    },
  })
  for (const file of ['slide', 'program']) {
    const collection = load(`collections/${file}.tsx`, {
      '@firecms/core': { buildCollection: (c) => c, buildProperty: (p) => p },
      './refresh-public-content': callbacks,
    })[file === 'slide' ? 'slidesCollection' : 'programsCollection']
    await collection.callbacks.onSaveSuccess({ context })
    await collection.callbacks.onDelete({ context })
  }
  assert.equal(attempts, 4)
  assert.equal(warnings.length, 1)
  assert.equal(warnings[0].type, 'warning')
  const retryButton = warnings[0].message.props.children.at(-1)
  retryButton.props.onClick()
  await new Promise(setImmediate)
  assert.equal(attempts, 5)
})
