// app/layout.tsx
import { Providers } from './providers'
import { Metadata } from 'next'
import { pageMetadata, websiteStructuredData } from '@/lib/seo'
import { siteUrl } from '@/lib/site'
import JsonLd from '@/views/components/JsonLd'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata('/'),
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='th'
      style={{ padding: '0px', overflowX: 'hidden' }}
    >
      <head>
        <link
          rel='preload'
          href='/fonts/optimized/LINESeedSansTH_Rg.751ec524.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='preload'
          href='/fonts/optimized/Urbanist-VariableFont_wght.36125906.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </head>
      <body
        suppressHydrationWarning={true}
        style={{ padding: '0px', overflowX: 'hidden' }}
      >
        <JsonLd data={websiteStructuredData} />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
