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
