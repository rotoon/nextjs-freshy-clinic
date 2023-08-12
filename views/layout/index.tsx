import { FooterHome, Hamburger, Header } from '@/views/components'
import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const FabButton = dynamic(
  () => {
    return import('../components/Fab')
  },
  { ssr: false, loading: () => <p>Loading...</p> }
)

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
      <FabButton />
    </>
  )
}
