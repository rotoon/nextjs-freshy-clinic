import { usePathname } from 'next/navigation'

import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './navbar.css'
import Link from 'next/link'
type Props = {}

function Header({}: Props) {
  const pathName = usePathname()
  const isPathHome = pathName === '/' ? 'bold' : 'normal'
  const isPathHomeScaleX = pathName === '/' ? 'scaleX(1)' : 'scaleX(0)'

  const isPathTour = pathName.includes('/tour') ? 'bold' : 'normal'
  const isPathTourScaleX = pathName.includes('/tour')
    ? 'scaleX(1)'
    : 'scaleX(0)'

  const isPathAbout = pathName === '/about' ? 'bold' : 'normal'
  const isPathAboutScaleX = pathName === '/about' ? 'scaleX(1)' : 'scaleX(0)'

  const isPathContact = pathName === '/contact' ? 'bold' : 'normal'
  const isPathContactScaleX =
    pathName === '/contact' ? 'scaleX(1)' : 'scaleX(0)'

  const [navSize, setnavSize] = useState<String>('5.5rem')
  const [navColor, setnavColor] = useState<String>('#b06dff')
  const [navImage, setnavImage] = useState<String>('3.75rem')
  const [navFont, setnavFont] = useState<String>('19px')
  const [navFontResponsive, setnavFontResponsive] = useState<String>('18px')
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor('#b06dff') : setnavColor('transparent')
    window.scrollY > 10 ? setnavSize('4.5rem') : setnavSize('5.5rem')
    window.scrollY > 10 ? setnavImage('3.25rem') : setnavImage('3.75rem')
    window.scrollY > 10 ? setnavFont('17px') : setnavFont('19px')
    window.scrollY > 10
      ? setnavFontResponsive('16px')
      : setnavFontResponsive('17px')
  }
  // useEffect(() => {
  //   window.addEventListener('scroll', listenScrollEvent)
  //   return () => {
  //     window.removeEventListener('scroll', listenScrollEvent)
  //   }
  // }, [])
  return (
    <Box
      zIndex='banner'
      w='100%'
      position='fixed'
      top='0px'
      fontFamily='LINESeedSansTH-Rg'
    >
      <Center
        w='100%'
        bg='#fff'
        h='3rem'
      >
        <Flex
          bg='#fff'
          alignItems='center'
          className='header-top'
          color='#254467'
          justifyContent='space-between'
        >
          <HStack
            spacing='1rem'
            fontSize='13px'
          >
            <Text>
              Tel :{' '}
              <a
                href='tel:097 196 3312'
                target='_blank'
              >
                097 196 3312
              </a>
            </Text>
            <Text>
              E-mail :{' '}
              <a
                href='mailto:Thefreshyclinic.cnx@gmail.com
'
                target='_blank'
              >
                Thefreshyclinic.cnx@gmail.com
              </a>
            </Text>
            {/* <Text>T.A.T License : 21/01126</Text> */}
          </HStack>
          <Box>
            <HStack
              alignItems='center'
              spacing='1.5rem'
            ></HStack>
          </Box>
        </Flex>
      </Center>

      <nav
        style={{
          transition: 'all 0.9s',
          backgroundColor: `${navColor}`,
          height: `${navSize}`,
          zIndex: 9999,
        }}
      >
        <Center
          fontSize={[
            `${navFontResponsive}`,
            `${navFontResponsive}`,
            `${navFontResponsive}`,
            `${navFontResponsive}`,
            `${navFont}`,
            `${navFont}`,
          ]}
          w='100%'
          color='#fff'
          zIndex='banner'
        >
          <HStack
            px='2rem'
            alignItems='center'
            justifyContent='space-evenly'
            w='100%'
          >
            <Text
              className='textcss'
              fontSize={[
                `${navFontResponsive}`,
                `${navFontResponsive}`,
                `${navFontResponsive}`,
                `${navFontResponsive}`,
                `${navFont}`,
                `${navFont}`,
              ]}
              _after={{ transform: isPathHomeScaleX }}
              transition='all 0.4s'
              as={Link}
              href='/'
              fontWeight={isPathHome}
              color={pathName === '/' ? '#fff' : '#fff'}
            >
              HOME
            </Text>

            <Text
              className='textcss'
              fontSize={[
                `${navFontResponsive}`,
                `${navFontResponsive}`,
                `${navFontResponsive}`,
                `${navFontResponsive}`,
                `${navFont}`,
                `${navFont}`,
              ]}
              transition='all 0.4s'
              as={Link}
              href='/tour'
              fontWeight={isPathTour}
              _after={{ transform: isPathTourScaleX }}
              color={pathName === '/tour' ? '#fff' : '#fff'}
            >
              เกี่ยวกับเรา
            </Text>
            <HStack
              fontFamily='Oswald-VariableFont-wght'
              alignItems='center'
              fontWeight='500'
            >
              <Image
                transition='all 0.4s'
                w='auto'
                objectFit='cover'
                src='/logo.png'
                alt='logo'
                h={`${navImage}`}
                borderRadius={10}
              />
            </HStack>
            <Text
              className='textcss'
              fontSize={[
                `${navFontResponsive}`,
                `${navFontResponsive}`,
                `${navFontResponsive}`,
                `${navFontResponsive}`,
                `${navFont}`,
                `${navFont}`,
              ]}
              color={pathName === '/about' ? '#fff' : '#fff'}
              transition='all 0.4s'
              as={Link}
              href='/about'
              fontWeight={isPathAbout}
              _after={{ transform: isPathAboutScaleX }}
            >
              บริการของเรา
            </Text>
            <Text
              className='textcss'
              fontSize={[
                `${navFontResponsive}`,
                `${navFontResponsive}`,
                `${navFontResponsive}`,
                `${navFontResponsive}`,
                `${navFont}`,
                `${navFont}`,
              ]}
              color={pathName === '/contact' ? '#fff' : '#fff'}
              transition='all 0.4s'
              fontWeight={isPathContact}
              as={Link}
              href='/contact'
              _after={{ transform: isPathContactScaleX }}
            >
              ติดต่อเรา
            </Text>
          </HStack>
        </Center>
      </nav>
    </Box>
  )
}

export { Header }
