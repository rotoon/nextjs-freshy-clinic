import { ChevronUpIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope, FaFacebookSquare, FaLine } from 'react-icons/fa'
import { ImLocation, ImPhone } from 'react-icons/im'
import Link from 'next/link'
import './footer.css'

function FooterHome() {
  return (
    <Box
      w='100%'
      bg='#b06dff'
      py={{ base: '2rem', sm: '2rem', md: '3rem' }}
    >
      <VStack
        px={['1rem', '1rem', '0rem', '0rem', '0rem', '0rem']}
        w='100%'
        fontSize={{ base: '14px', sm: '14px', md: '16px', lg: '16px' }}
        spacing={{ base: '2rem', sm: '2rem', md: '2rem', lg: '3rem' }}
        justifyContent='start'
        alignItems={{ base: 'center', sm: 'center', md: 'center' }}
      >
        {/* <Flex
          pt='1rem'
          position='absolute'
          right={{
            base: '0.5rem',
            sm: '0.5rem',
            md: '0.5rem',
            lg: '1rem',
            xl: '2.5rem',
            '2xl': '10rem',
          }}
        >
          <VStack
            color='#fff'
            borderRadius='30px'
            w={{ base: '2.25rem', sm: '2.25rem', md: '2.75rem' }}
            spacing='0px'
            h='auto'
            bg='#ff9900'
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }}
            cursor='pointer'
            boxShadow='rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'
            fontSize={{ base: '10px', sm: '10px', md: '12px' }}
            textAlign='center'
            fontWeight='bold'
            transition='all 0.4s'
            _hover={{
              mstransform: 'scale(1.05)',
              webkittransform: ' scale(1.05)',
              transform: 'scale(1.05)',
              transition: 'all 0.4s',
              boxShadow:
                'rgba(0, 0, 0, 0) 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px',
            }}
            _active={{
              mstransform: 'scale(0.95)',
              webkittransform: ' scale(0.95)',
              transform: 'scale(0.95)',
              transition: 'all 0.4s',
              boxShadow:
                'rgba(0, 0, 0, 0) 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px',
            }}
          >
            <Text
              fontSize='28px'
              mt={{ base: '-0.25rem', sm: '-0.25rem', md: '0rem' }}
            >
              <ChevronUpIcon />
            </Text>
            <Center
              flexDirection='column'
              mt={{ base: '-0.25rem', sm: '-0.25rem', md: '0rem' }}
              pb={{ base: '0.5rem', sm: '0.5rem', md: '1rem' }}
            >
              <Text>BACK</Text>
              <Text mt='-0.25rem'>TO</Text>
              <Text mt='-0.25rem'>TOP</Text>
            </Center>
          </VStack>
        </Flex> */}
        <HStack
          w={{
            base: '100%',
            sm: '100%',
            md: '90%',
            lg: '90%',
            xl: '75rem',
            '2xl': '75rem',
          }}
          color='#fff'
          alignItems={{ base: 'flex-start', sm: 'center', md: 'flex-start' }}
          flexDirection={['column', 'column', 'row', 'row', 'row', 'row']}
        >
          <VStack
            alignItems={{ base: 'flex-start' }}
            w='100%'
            spacing={{ base: '0.75rem', sm: '0.75rem', md: '0.75rem' }}
          >
            <Image
              alt='logo'
              src='/logo.png'
              h='3rem'
              objectFit='cover'
              w='auto'
              borderRadius={10}
            />
            <Text
              w={{ base: '100%', sm: '100%', md: '20rem', lg: '18rem' }}
              lineHeight='20px'
              fontFamily='LINESeedSansTH-Rg'
            >
              คลินิกเสริมความงามอย่างครบวงจร ศัลยกรรม หัตการ
              ทรีทเม้นท์ต่างๆให้เราดูแลนะคะ
            </Text>
          </VStack>

          <VStack
            mt='1rem'
            spacing={{
              base: '0.25rem',
              sm: '0.25rem',
              md: '0.25rem',
              lg: '1rem',
            }}
            alignItems='flex-start'
            w='100%'
            fontFamily='LINESeedSansTH-Rg'
          >
            <Text fontWeight='bold'>เมนู</Text>
            <Text
              cursor='pointer'
              className='hover-underline-footer'
              as={Link}
              href='/about'
            >
              เกี่ยวกับเรา
            </Text>
            <Text
              cursor='pointer'
              className='hover-underline-footer'
              as={Link}
              href='/about'
            >
              บริการของเรา
            </Text>
          </VStack>
          <VStack
            mt='1rem'
            spacing={{
              base: '0.25rem',
              sm: '0.25rem',
              md: '0.25rem',
              lg: '1rem',
            }}
            alignItems='flex-start'
            w='100%'
            fontFamily='LINESeedSansTH-Rg'
          >
            <Text fontWeight='bold'>ติดต่อเรา</Text>
            <HStack alignItems='start'>
              <Text mt='0.15rem'>
                <ImLocation />
              </Text>
              <Text
                lineHeight='20px'
                fontFamily='LINESeedSansTH-Rg'
              >
                76/2 ถ.หมื่นด้ามพร้าคต ต.ช้างเผือก อ.เมือง จ.เชียงใหม่,
                เชียงใหม่, ประเทศไทย, 50300
              </Text>
            </HStack>
            <HStack>
              <Text>
                <FaEnvelope />
              </Text>
              <Text
                as={Link}
                target='_blank'
                href='mailto:anthaitour.info@gmail.com'
              >
                thefreshyclinic.cnx@gmail.com
              </Text>
            </HStack>
            <HStack alignItems='start'>
              <Text mt='0.15rem'>
                <ImPhone />
              </Text>
              <VStack
                spacing='0px'
                alignItems='flex-start'
              >
                <Text fontFamily='LINESeedSansTH-Rg'>
                  สนใจจองคิว สอบถามข้อมูล
                </Text>
                <Text
                  mt={{ base: '0rem', sm: '-0.15rem', md: '-0.25rem' }}
                  style={{ fontWeight: 'bold' }}
                  href='tel:0971963312'
                  target='_blank'
                  as={Link}
                >
                  097 196 3312
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </HStack>

        <Flex
          borderTop='1px solid #fff'
          w={{ base: '100%', sm: '100%', md: '90%', lg: '90%', xl: '75rem' }}
          color='#fff'
          justifyContent='space-between'
          pt={{ base: '1rem', sm: '1rem', md: '1.25rem' }}
          alignItems='center'
          fontSize={{ base: '12px', sm: '14px', md: '16px' }}
        >
          <Text>2023 © The Freshy Clinic All Rights Reserved.</Text>
          <HStack
            spacing={{ base: '0.5rem', sm: '0.5rem', md: '1rem' }}
            fontSize={{ base: '22px', sm: '28px', md: '28px' }}
          >
            <Text
              as={Link}
              href='https://www.facebook.com/Thefreshyclinic.cnx/'
              target='_blank'
            >
              <FaFacebookSquare />
            </Text>
            <Text
              as={Link}
              href='https://lin.ee/Tdrn4pv'
              target='_blank'
            >
              <FaLine />
            </Text>
          </HStack>
        </Flex>
      </VStack>
    </Box>
  )
}

export { FooterHome }
