import { branches } from '@/lib/site'
import { usePathname } from 'next/navigation'

import { Box, Center, Flex, HStack, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Link from 'next/link'
import './navbar.css'

function Header() {
  const pathName = usePathname()
  const isPathHome = pathName === '/' ? 'bold' : 'normal'
  const isPathHomeScaleX = pathName === '/' ? 'scaleX(1)' : 'scaleX(0)'

  const isPathAbout = pathName.includes('/about-us') ? 'bold' : 'normal'
  const isPathAboutScaleX = pathName.includes('/about-us')
    ? 'scaleX(1)'
    : 'scaleX(0)'

  const isPathPrograms = pathName === '/service-programs' ? 'bold' : 'normal'
  const isPathProgramsScaleX =
    pathName === '/service-programs' ? 'scaleX(1)' : 'scaleX(0)'

  const isPathContact = pathName === '/contact-us' ? 'bold' : 'normal'
  const isPathContactScaleX =
    pathName === '/contact-us' ? 'scaleX(1)' : 'scaleX(0)'

  const [navSize] = useState<String>('5.5rem')
  const [navColor] = useState<String>('#b06dff')
  const [navImage] = useState<String>('3.75rem')
  const [navFont] = useState<String>('19px')
  const [navFontResponsive] = useState<String>('18px')
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
            <Text fontWeight='bold'>สาขาเชียงใหม่</Text>
            <Text>
              Tel :{' '}
              <a
                href={`tel:${branches[0].telephone}`}
                target='_blank'
              >
                {branches[0].displayTelephone}
              </a>
            </Text>
            <Text>
              E-mail :{' '}
              <a
                href={`mailto:${branches[0].email}`}
                target='_blank'
              >
                {branches[0].email}
              </a>
            </Text>
            {/* <Text>T.A.T License : 21/01126</Text> */}
          </HStack>
          <Box>
            <HStack
              spacing='1rem'
              fontSize='13px'
            >
              <Text fontWeight='bold'>สาขาเชียงราย</Text>
              <Text>
                Tel :{' '}
                <a
                  href={`tel:${branches[1].telephone}`}
                  target='_blank'
                >
                  {branches[1].displayTelephone}
                </a>
              </Text>
              <Text>
                E-mail :{' '}
                <a
                  href={`mailto:${branches[1].email}`}
                  target='_blank'
                >
                  {branches[1].email}
                </a>
              </Text>
            </HStack>
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
            <div
              className={`effect-three-header${
                pathName === '/' ? '-active' : ''
              }`}
            >
              <Text
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
                color={pathName === '/' ? '#fff' : '#red'}
              >
                HOME
              </Text>
            </div>
            <div
              className={`effect-three-header${
                pathName === '/about-us' ? '-active' : ''
              }`}
            >
              <Text
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
                href='/about-us'
                fontWeight={isPathAbout}
                _after={{ transform: isPathAboutScaleX }}
                color={pathName === '/about-us' ? '#fff' : '#fff'}
              >
                เกี่ยวกับเรา
              </Text>
            </div>

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
                alt='The Freshy Clinic'
                h={`${navImage}`}
                borderRadius={10}
              />
            </HStack>
            <div
              className={`effect-three-header${
                pathName === '/service-programs' ? '-active' : ''
              }`}
            >
              <Text
                fontSize={[
                  `${navFontResponsive}`,
                  `${navFontResponsive}`,
                  `${navFontResponsive}`,
                  `${navFontResponsive}`,
                  `${navFont}`,
                  `${navFont}`,
                ]}
                color={pathName === '/service-programs' ? '#fff' : '#fff'}
                transition='all 0.4s'
                as={Link}
                href='/service-programs'
                fontWeight={isPathPrograms}
                _after={{ transform: isPathProgramsScaleX }}
              >
                บริการของเรา
              </Text>
            </div>
            <div
              className={`effect-three-header${
                pathName === '/contact-us' ? '-active' : ''
              }`}
            >
              <Text
                fontSize={[
                  `${navFontResponsive}`,
                  `${navFontResponsive}`,
                  `${navFontResponsive}`,
                  `${navFontResponsive}`,
                  `${navFont}`,
                  `${navFont}`,
                ]}
                color={pathName === '/contact-us' ? '#fff' : '#fff'}
                transition='all 0.4s'
                fontWeight={isPathContact}
                as={Link}
                href='/contact-us'
                _after={{ transform: isPathContactScaleX }}
              >
                ติดต่อเรา
              </Text>
            </div>
          </HStack>
        </Center>
      </nav>
    </Box>
  )
}

export { Header }
