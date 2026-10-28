import ProgramsPage from '@/views/programs'
import { TProgram } from '../page'
import { pageMetadata, serviceCatalogStructuredData } from '@/lib/seo'
import JsonLd from '@/views/components/JsonLd'

export const metadata = pageMetadata('/service-programs')

export interface ProgramsComponentProps {
  programs: {
    total: number
    list: TProgram[]
  }
}

async function getData() {
  const url2 =
    'https://asia-southeast1-nextjs-freshy-clinic.cloudfunctions.net/programs'
  const [res2] = await Promise.all([
    await fetch(url2, { next: { revalidate: 86400, tags: ['public-content'] } }),
  ])
  if (res2.status !== 200) {
    throw new Error('Failed to fetch data')
  }
  const programs = await res2.json()

  return {
    programs,
  }
}

export default async function Programs() {
  const { programs }: ProgramsComponentProps = await getData()

  return (
    <main>
      <JsonLd data={serviceCatalogStructuredData(programs.list)} />
      <ProgramsPage programs={programs} />
    </main>
  )
}
