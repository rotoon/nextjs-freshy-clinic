import { Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react'
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
          flexDirection={['column', 'column', 'column', 'row', 'row', 'row']}
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
              w={{ base: '100%', sm: '100%', md: '20rem', lg: '20rem' }}
              lineHeight='20px'
              fontFamily='LINESeedSansTH-Rg'
            >
              คลินิกเฉพาะทางด้านเสริมความงาม
              โดยแพทย์ผู้เชี่ยวชาญด้านหัตการเสริมความงาม
              พร้อมให้คำปรึกษาแนะนำก่อนทำทุกเคสเพื่อให้ตรงตามความต้องการของลูกค้า
              ปัจจุบันทางคลินิกเปิดให้บริการ สาขาเชียงใหม่ และสาขาเชียงราย
              เปิดให้บริการทุกวันตั้งแต่เวลา 11.00 - 20.00น.
              ให้คลินิกของเราได้ดูแลคุณนะคะ
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
              href='/about-us'
            >
              เกี่ยวกับเรา
            </Text>
            <Text
              cursor='pointer'
              className='hover-underline-footer'
              as={Link}
              href='/service-programs'
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
            <Text fontWeight='bold'>ติดต่อเรา สาขาเชียงใหม่</Text>
            <HStack alignItems='start'>
              <Text mt='0.15rem'>
                <ImLocation />
              </Text>
              <Text
                lineHeight='20px'
                fontFamily='LINESeedSansTH-Rg'
              >
                76/2 ถ.หมื่นด้ามพร้าคต ต.ช้างเผือก อ.เมืองเชียงใหม่ จ.เชียงใหม่
                50300
              </Text>
            </HStack>
            <HStack>
              <Text>
                <FaEnvelope />
              </Text>
              <Text
                as={Link}
                target='_blank'
                href='mailto:thefreshyclinic.cnx@gmail.com'
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
            <Text fontWeight='bold'>ติดต่อเรา สาขาเชียงราย</Text>
            <HStack alignItems='start'>
              <Text mt='0.15rem'>
                <ImLocation />
              </Text>
              <Text
                lineHeight='20px'
                fontFamily='LINESeedSansTH-Rg'
              >
                66/42 ม.11 ต.สันทราย อ.เมืองเชียงราย จ.เชียงราย 57000
              </Text>
            </HStack>
            <HStack>
              <Text>
                <FaEnvelope />
              </Text>
              <Text
                as={Link}
                target='_blank'
                href='mailto:thefreshyclinic.cr@gmail.com'
              >
                thefreshyclinic.cr@gmail.com
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
                  href='tel:0957943443'
                  target='_blank'
                  as={Link}
                >
                  095 794 3443
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
