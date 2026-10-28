import AboutUs from '@/views/about-us'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata('/about-us')

export default async function About() {
  return (
    <main>
      <AboutUs />
    </main>
  )
}
