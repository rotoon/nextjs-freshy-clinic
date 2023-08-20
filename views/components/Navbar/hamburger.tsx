import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import React, { ChangeEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './navbar.css'

type Props = {}

function Hamburger({}: Props) {
  const [navSize, setnavSize] = useState<String>('4rem')
  const [navImage, setnavImage] = useState<String>('2.75rem')
  const [checkNavbar, setCheckNavbar] = useState<boolean>(false)
  const pathName = usePathname()
  const isPathHome = pathName === '/' ? 'scaleX(1)' : 'scaleX(0)'
  const isPathHomebg = pathName === '/' ? '#e9e9e9' : 'transparent'
  const isPathAbout = pathName.includes('about-us') ? 'scaleX(1)' : 'scaleX(0)'
  const isPathAboutbg = pathName.includes('about-us')
    ? '#e9e9e9'
    : 'transparent'
  const isPathService =
    pathName === '/service-programs' ? 'scaleX(1)' : 'scaleX(0)'
  const isPathServicebg =
    pathName === '/service-programs' ? '#e9e9e9' : 'transparent'
  const isPathContact = pathName === '/contact-us' ? 'scaleX(1)' : 'scaleX(0)'
  const isPathContactbg = pathName === '/contact-us' ? '#e9e9e9' : 'transparent'

  const { isOpen, onOpen, onClose } = useDisclosure()
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavSize('3.5rem') : setnavSize('4rem')
    window.scrollY > 10 ? setnavImage('2.5rem') : setnavImage('2.75rem')
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)

    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
    }
  }, [])

  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      w='100%'
      bg='#b06dff'
      transition='all 0.4s'
      h={`${navSize}`}
      zIndex='banner'
      position='fixed'
      top='0px'
      fontFamily='LINESeedSans-Rg'
      px={['1rem', '1.5rem', '1.5rem', '1.5rem', '1.5rem', '1.5rem']}
    >
      <Image
        transition='all 0.4s'
        src='/logo.png'
        alt='logo'
        w='auto'
        h={`${navImage}`}
        borderRadius={10}
      />
      <Center w='max-content'>
        <Box
          className='container'
          mt='-2px'
        >
          <input
            checked={checkNavbar}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const checked = event.target.checked

              setCheckNavbar(checked)
              if (isOpen) {
              } else {
                onOpen()
              }
            }}
            type='checkbox'
            id='checkbox4'
            className='checkbox4 visuallyHidden'
          />
          <label htmlFor='checkbox4'>
            <div className='hamburger hamburger4'>
              <span className='bar bar1'></span>
              <span className='bar bar2'></span>
              <span className='bar bar3'></span>
              <span className='bar bar4'></span>
              <span className='bar bar5'></span>
            </div>
          </label>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={() => {
            onClose()
            setCheckNavbar(false)
          }}
        >
          <DrawerOverlay />
          <DrawerContent
            p='0px'
            borderTopLeftRadius='25px'
          >
            <DrawerCloseButton
              color='white'
              onClick={() => {
                setCheckNavbar(false)
              }}
            />
            <DrawerHeader
              borderTopLeftRadius='25px'
              textAlign='center'
              py='1.5rem'
              fontFamily='Oswald-VariableFont-wght'
              fontSize='30px'
              bg='#b06dff'
              color='#fff'
            >
              The freshy clinic
            </DrawerHeader>

            <DrawerBody
              p='0px'
              fontFamily='LINESeedSansTH-Rg'
            >
              <VStack
                w='100%'
                spacing='0px'
              >
                <Center
                  as={Link}
                  href='/'
                  bg={isPathHomebg}
                  px='0rem'
                  w='100%'
                  transition='all 0.3s'
                  onClick={() => {
                    onClose()
                    setCheckNavbar(false)
                  }}
                >
                  <Text
                    fontSize='16px'
                    fontWeight={pathName === '/' ? 'bold' : 'normal'}
                    py='1.75rem'
                    w='max-content'
                    border='1px solid transparent'
                    textAlign='center'
                    className='fromCenter textcss'
                    _focus={{ border: '1px solid transparent' }}
                    _after={{ transform: isPathHome }}
                    onClick={() => onClose()}
                    color={pathName === '/' ? '#4b4b4b' : '#000'}
                  >
                    HOME
                  </Text>
                </Center>
                <Center
                  as={Link}
                  href='/about-us'
                  bg={isPathAboutbg}
                  px='0rem'
                  w='100%'
                  transition='all 0.3s'
                  onClick={() => {
                    onClose()
                    setCheckNavbar(false)
                  }}
                >
                  <Text
                    fontSize='16px'
                    fontWeight={pathName.includes('tour') ? 'bold' : 'normal'}
                    py='1.75rem'
                    w='max-content'
                    border='1px solid transparent'
                    textAlign='center'
                    className='fromCenter textcss'
                    _focus={{ border: '1px solid transparent' }}
                    _after={{ transform: isPathAbout }}
                    onClick={() => onClose()}
                    color={pathName.includes('tour') ? '#4b4b4b' : '#000'}
                  >
                    เกี่ยวกับเรา
                  </Text>
                </Center>
                <Center
                  as={Link}
                  href='/service-programs'
                  bg={isPathServicebg}
                  px='0rem'
                  w='100%'
                  transition='all 0.3s'
                  onClick={() => {
                    onClose()
                    setCheckNavbar(false)
                  }}
                >
                  <Text
                    fontSize='16px'
                    fontWeight={
                      pathName === '/service-programs' ? 'bold' : 'normal'
                    }
                    py='1.75rem'
                    w='max-content'
                    border='1px solid transparent'
                    textAlign='center'
                    className='fromCenter textcss'
                    _focus={{ border: '1px solid transparent' }}
                    _after={{ transform: isPathService }}
                    onClick={() => onClose()}
                    color={
                      pathName === '/service-programs' ? '#4b4b4b' : '#000'
                    }
                  >
                    บริการของเรา
                  </Text>
                </Center>
                <Center
                  as={Link}
                  href='/contact-us'
                  bg={isPathContactbg}
                  px='0rem'
                  w='100%'
                  transition='all 0.3s'
                  onClick={() => {
                    onClose()
                    setCheckNavbar(false)
                  }}
                >
                  <Text
                    fontSize='16px'
                    fontWeight={pathName === '/contact-us' ? 'bold' : 'normal'}
                    py='1.75rem'
                    w='max-content'
                    border='1px solid transparent'
                    textAlign='center'
                    className='fromCenter textcss'
                    _focus={{ border: '1px solid transparent' }}
                    _after={{ transform: isPathContact }}
                    onClick={() => onClose()}
                    color={pathName === '/contact-us' ? '#4b4b4b' : '#000'}
                  >
                    ติดต่อเรา
                  </Text>
                </Center>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Center>
    </Flex>
  )
}

export { Hamburger }
