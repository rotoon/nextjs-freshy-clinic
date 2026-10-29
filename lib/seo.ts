import type { Metadata } from 'next'
import { branches, publicPages, siteName, siteUrl } from './site'
import type { TProgram } from '@/app/page'
import { programLink } from './program-links'

export function pageMetadata(path: keyof typeof publicPages): Metadata {
  const { title, description } = publicPages[path]
  const url = `${siteUrl}${path}`
  const images = [{ url: `${siteUrl}/images/og-clinic.jpg`, width: 1200, height: 630, alt: 'บรรยากาศภายใน The Freshy Clinic' }]
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: 'website', locale: 'th_TH', siteName, title, description, url, images },
    twitter: { card: 'summary_large_image', title, description, images },
  }
}

export const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteName,
      alternateName: 'เดอะเฟรชชี่คลินิก',
      url: `${siteUrl}/`,
      logo: `${siteUrl}/logo.png`,
      sameAs: branches.map((branch) => branch.facebook),
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: siteName,
      alternateName: 'เดอะเฟรชชี่คลินิก',
      url: `${siteUrl}/`,
      inLanguage: 'th-TH',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
  ],
}

export const clinicStructuredData = {
  '@context': 'https://schema.org',
  '@graph': branches.map((branch) => ({
    '@type': 'MedicalClinic',
    '@id': `${siteUrl}/contact-us#${branch.id}`,
    name: `${siteName} ${branch.name}`,
    url: `${siteUrl}/contact-us#${branch.id}`,
    image: `${siteUrl}/logo.png`,
    telephone: branch.telephone,
    email: branch.email,
    parentOrganization: { '@id': `${siteUrl}/#organization` },
    sameAs: [branch.facebook],
    hasMap: branch.mapUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: branch.streetAddress,
      addressLocality: branch.locality,
      addressRegion: branch.province,
      postalCode: branch.postalCode,
      addressCountry: 'TH',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: branch.opens,
      closes: branch.closes,
    },
  })),
}

export function serviceCatalogStructuredData(programs: Pick<TProgram, 'id' | 'title'>[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}/service-programs#webpage`,
    url: `${siteUrl}/service-programs`,
    name: publicPages['/service-programs'].title,
    inLanguage: 'th-TH',
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#organization` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: programs.length,
      itemListElement: programs.map((program, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          '@id': `${siteUrl}${programLink(program.id).path}`,
          url: `${siteUrl}${programLink(program.id).path}`,
          name: program.title,
          provider: { '@id': `${siteUrl}/#organization` },
        },
      })),
    },
  }
}
