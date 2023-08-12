import { FooterHome, Hamburger, Header } from '@/views/components'
import { Box } from '@chakra-ui/react'
import FabButton from '../components/Fab'

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
