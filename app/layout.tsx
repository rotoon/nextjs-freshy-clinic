// app/layout.tsx
import { Providers } from './providers'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Freshy clinic เชียงใหม่ คลินิกเวชกรรม',
  description:
    'The Freshy clinic เชียงใหม่ คลินิกเวชกรรม คลินิกศัลยกรรมความงาม ครบวงจร',
  icons: {
    icon: '/favicon.ico',
  },
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
        <meta
          data-n-head='ssr'
          charSet='UTF-8'
        />
        <meta
          data-n-head='ssr'
          name='viewport'
          content='width=device-width, initial-scale=1'
        />

        <meta
          data-n-head='ssr'
          property='og:url'
          name='og:url'
          content='https://https://thefreshyclinic.com/'
        />
        <meta
          data-n-head='ssr'
          property='og:site_name'
          name='og:site_name'
          content='The freshy clinic คลินิกเสริมความงาม เชียงใหม่'
        />
        <meta
          data-n-head='ssr'
          property='og:image'
          name='og:image'
          content='https://firebasestorage.googleapis.com/v0/b/nextjs-freshy-clinic.appspot.com/o/images%2F85344.jpg?alt=media&token=2c847c06-94dc-41ab-b13c-d740a3b6a047'
        />
        <meta
          data-n-head='ssr'
          property='og:image:secure_url'
          name='og:image:secure_url'
          content='https://firebasestorage.googleapis.com/v0/b/nextjs-freshy-clinic.appspot.com/o/images%2F85344.jpg?alt=media&token=2c847c06-94dc-41ab-b13c-d740a3b6a047'
        />
        <meta
          property='og:title'
          content='The freshy clinic คลินิกเสริมความงาม เชียงใหม่'
        ></meta>
        <meta
          property='og:description'
          content='The freshy clinic คลินิกเสริมความงาม เชียงใหม่ คลีนิคศัลกรรมความงามครบวงจร'
        />
        <meta
          data-n-head='ssr'
          property='twitter:image'
          name='twitter:image'
          content='https://firebasestorage.googleapis.com/v0/b/nextjs-freshy-clinic.appspot.com/o/images%2F85344.jpg?alt=media&token=2c847c06-94dc-41ab-b13c-d740a3b6a047'
        />
        <meta
          data-n-head='ssr'
          property='twitter:card'
          name='twitter:card'
          content='summary'
        />
        <meta
          property='twitter:title'
          content='The freshy clinic คลินิกเสริมความงาม เชียงใหม่'
        />
        <meta
          property='twitter:description'
          content='The freshy clinic คลินิกเสริมความงาม เชียงใหม่ คลีนิคศัลกรรมความงามครบวงจร'
        ></meta>
        <meta
          property='og:title'
          content='The freshy clinic คลินิกเสริมความงาม เชียงใหม่'
        ></meta>
        <meta
          property='og:description'
          content='The freshy clinic คลินิกเสริมความงาม เชียงใหม่ คลีนิคศัลกรรมความงามครบวงจร'
        />
      </head>
      <body
        suppressHydrationWarning={true}
        style={{ padding: '0px', overflowX: 'hidden' }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
