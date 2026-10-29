const assert = require('node:assert/strict')
const { readFileSync } = require('node:fs')
const path = require('node:path')
const { test } = require('node:test')
const vm = require('node:vm')
const ts = require('typescript')

function load(file, dependencies = {}) {
  const { outputText } = ts.transpileModule(
    readFileSync(path.join(__dirname, '..', file), 'utf8'),
    { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }
  )
  const exports = {}
  vm.runInNewContext(outputText, {
    exports,
    require: (name) => name in dependencies ? dependencies[name] : require(name),
  })
  return exports
}

const site = load('lib/site.ts')
const links = load('lib/program-links.ts')
const seo = load('lib/seo.ts', { './site': site, './program-links': links })

test('public pages have unique search snippets and matching canonical and social URLs', () => {
  const titles = new Set()
  const descriptions = new Set()
  for (const route of Object.keys(site.publicPages)) {
    const metadata = seo.pageMetadata(route)
    assert.equal(metadata.alternates.canonical, site.siteUrl + route)
    assert.equal(metadata.openGraph.url, metadata.alternates.canonical)
    assert.equal(metadata.openGraph.title, metadata.title)
    assert.equal(metadata.twitter.description, metadata.description)
    assert.ok(metadata.openGraph.images[0].url.startsWith(site.siteUrl + '/'))
    titles.add(metadata.title)
    descriptions.add(metadata.description)
  }
  assert.equal(titles.size, 4)
  assert.equal(descriptions.size, 4)
})

test('sitemap exposes only canonical public pages and robots advertises it', () => {
  const sitemap = load('app/sitemap.ts', { '@/lib/site': site }).default()
  const robots = load('app/robots.ts', { '@/lib/site': site }).default()
  assert.deepEqual(Array.from(sitemap, (page) => page.url), [
    `${site.siteUrl}/`, `${site.siteUrl}/about-us`,
    `${site.siteUrl}/service-programs`, `${site.siteUrl}/contact-us`,
  ])
  assert.equal(robots.sitemap, `${site.siteUrl}/sitemap.xml`)
  assert.equal(robots.rules.allow, '/')
  assert.ok(robots.rules.disallow.includes('/api/'))
})

test('clinic schema keeps separate branch identities, addresses, phones, and confirmed hours', () => {
  const clinics = seo.clinicStructuredData['@graph']
  assert.equal(clinics.length, 2)
  assert.notEqual(clinics[0]['@id'], clinics[1]['@id'])
  for (let i = 0; i < clinics.length; i++) {
    const clinic = clinics[i]
    assert.equal(clinic['@type'], 'MedicalClinic')
    assert.equal(clinic.telephone, site.branches[i].telephone)
    assert.equal(clinic.address.streetAddress, site.branches[i].streetAddress)
    assert.equal(clinic.openingHoursSpecification.dayOfWeek.length, 7)
    assert.equal(clinic.openingHoursSpecification.closes, '20:00')
    assert.equal(clinic.parentOrganization['@id'], seo.websiteStructuredData['@graph'][0]['@id'])
    assert.match(clinic.hasMap, /^https:\/\/maps\.google\.com\/\?cid=\d+$/)
    assert.ok(!('aggregateRating' in clinic))
  }
  assert.equal(clinics[0].openingHoursSpecification.opens, '12:00')
  assert.equal(clinics[1].openingHoursSpecification.opens, '11:00')
})

test('JSON-LD cannot close its script element and preserves the original data', () => {
  const JsonLd = load('views/components/JsonLd.tsx').default
  const data = { name: '</script><script>alert("test")</script>', description: 'คลินิก' }
  const output = JsonLd({ data }).props.dangerouslySetInnerHTML.__html
  assert.ok(!output.includes('<'))
  assert.deepEqual(JSON.parse(output), data)
})

test('program references use document IDs so duplicate or changed titles keep distinct stable URLs', () => {
  const programs = [
    { id: 'iv-one', title: 'IV Drip' },
    { id: 'iv-two', title: 'IV Drip' },
  ]
  const before = seo.serviceCatalogStructuredData(programs).mainEntity.itemListElement
  assert.notEqual(before[0].item.url, before[1].item.url)
  assert.equal(before[0].item.url, site.siteUrl + links.programLink(programs[0].id).path)
  programs[0].title = 'Updated program title'
  const after = seo.serviceCatalogStructuredData(programs).mainEntity.itemListElement
  assert.equal(after[0].item.url, before[0].item.url)
  assert.equal(after[0].item.name, programs[0].title)
  const special = links.programLink('โปรแกรม #1?')
  assert.equal(decodeURIComponent(special.path.split('#')[1]), special.anchor)
  assert.equal(special.path.split('#').length, 2)
})

test('catalog follows current CMS order and removals without inventing offers or medical claims', () => {
  const programs = [{ id: 'second', title: 'Second program' }, { id: 'first', title: 'First program' }]
  const catalog = seo.serviceCatalogStructuredData(programs)
  assert.equal(catalog.mainEntity.numberOfItems, 2)
  for (let i = 0; i < programs.length; i++) {
    const entry = catalog.mainEntity.itemListElement[i]
    assert.equal(entry.position, i + 1)
    assert.equal(entry.item.name, programs[i].title)
    assert.equal(entry.item.provider['@id'], site.siteUrl + '/#organization')
    assert.ok(!('offers' in entry.item))
    assert.ok(!('description' in entry.item))
    assert.ok(!('aggregateRating' in entry.item))
  }
  assert.equal(seo.serviceCatalogStructuredData(programs.slice(1)).mainEntity.numberOfItems, 1)
  const empty = seo.serviceCatalogStructuredData([]).mainEntity
  assert.equal(empty.numberOfItems, 0)
  assert.equal(empty.itemListElement.length, 0)
})
