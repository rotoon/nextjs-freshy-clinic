'use client'

// app/layout.tsx
import { Providers } from './providers'
import { Header, Hamburger, FooterHome } from '@/Components'
import { Box } from '@chakra-ui/react'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
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
        {/* <meta
          data-n-head='ssr'
          data-hid='description'
          name='description'
          content='คลินิกเสริมความงาม เชียงใหม่ โดยแพทย์เฉพาะทางผู้เชี่ยวชาญเฉพาะทาง ด้านหัตถการด้านความงาม มีประสบการณ์ในวงการเสริมความงามมามากว่า 10 ปี มีใบรับรองมาตรฐานความงาม'
        />
        <meta
          data-n-head='ssr'
          data-hid='apple-mobile-web-app-title'
          name='apple-mobile-web-app-title'
          content='คลินิกเสริมความงามเชียงใหม่ ไฮฟู ร้อยไหม เลเซอร์ โบท็อกซ์ | WOW CLINIC'
        />
        <meta
          data-n-head='ssr'
          property='og:title'
          name='og:title'
          content='คลินิกเสริมความงามเชียงใหม่ ไฮฟู ร้อยไหม เลเซอร์ โบท็อกซ์ | WOW CLINIC'
        />
        <meta
          data-n-head='ssr'
          property='og:description'
          name='og:description'
          content='คลินิกเสริมความงาม เชียงใหม่ โดยแพทย์เฉพาะทางผู้เชี่ยวชาญเฉพาะทาง ด้านหัตถการด้านความงาม มีประสบการณ์ในวงการเสริมความงามมามากว่า 10 ปี มีใบรับรองมาตรฐานความงาม'
        /> */}
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
        {/* <meta
          data-n-head='ssr'
          property='twitter:title'
          name='twitter:title'
          content='คลินิกเสริมความงามเชียงใหม่ ไฮฟู ร้อยไหม เลเซอร์ โบท็อกซ์ | WOW CLINIC'
        />
        <meta
          data-n-head='ssr'
          property='twitter:description'
          name='twitter:description'
          content='คลินิกเสริมความงาม เชียงใหม่ โดยแพทย์เฉพาะทางผู้เชี่ยวชาญเฉพาะทาง ด้านหัตถการด้านความงาม มีประสบการณ์ในวงการเสริมความงามมามากว่า 10 ปี มีใบรับรองมาตรฐานความงาม'
        /> */}
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
      </head>
      <body
        suppressHydrationWarning={true}
        style={{ padding: '0px', overflowX: 'hidden' }}
      >
        <Providers>
          <Box
            className='header'
            zIndex='banner'
          >
            <Header />
          </Box>
          <Box
            display={['flex', 'flex', 'flex', 'none', 'none', 'none']}
            zIndex='banner'
          >
            <Hamburger />
          </Box>
          {children}
          <Box
            w='100%'
            mt='-1px'
          >
            <FooterHome />
          </Box>
        </Providers>
      </body>
    </html>
  )
}
