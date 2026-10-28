import Contact from '@/views/contact-us'
import JsonLd from '@/views/components/JsonLd'
import { clinicStructuredData, pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata('/contact-us')

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={clinicStructuredData} />
      <Contact />
    </main>
  )
}
