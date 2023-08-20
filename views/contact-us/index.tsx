'use client'
import Layout from '@/views/layout'
import {
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Center,
  HStack,
  Link,
  Box,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FaEnvelope } from 'react-icons/fa'
import { ImLocation, ImPhone } from 'react-icons/im'

export default function Contact() {
  return (
    <Layout>
      <Container
        w='100%'
        maxW='7xl'
        my={{ base: 4, md: 10 }}
        minH='20vh'
      >
        <VStack
          mt={{ base: '5rem', lg: '10rem' }}
          spacing={20}
        >
          <Stack spacing={6}>
            <Heading
              as='h1'
              fontSize={[28, 28, 28, 28, 28, 30]}
              fontFamily='LINESeedSansTH-Rg'
              textAlign='center'
            >
              ติดต่อเรา The Freshy Clinic
            </Heading>
            <Heading
              fontFamily='LINESeedSansTH-Rg'
              as='h5'
              fontSize={[14, 16, 18, 18, 18, 18]}
              textAlign='center'
              color='gray'
            >
              คลินิกเสริมความงามที่เนรมิตความสวยให้คุณด้วยหัวใจ
            </Heading>
            <Stack spacing={10}>
              <Stack
                flexDirection={{ base: 'column', md: 'row' }}
                w='100%'
                justifyContent='space-between'
                spacing={10}
              >
                <Box
                  boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                  borderRadius='10px'
                >
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.0528138583895!2d98.99278756955107!3d18.805058770832936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3b6dd375ac33%3A0xed5289ef4520f051!2sThe%20freshy%20clinic!5e0!3m2!1sth!2sth!4v1692517159677!5m2!1sth!2sth'
                    loading='lazy'
                    width='100%'
                    height='100%'
                    style={{
                      border: '0',
                      overflow: 'hidden',
                      borderRadius: '10px',
                    }}
                  ></iframe>
                </Box>
                <VStack
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
                      76/2 ถ.หมื่นด้ามพร้าคต ต.ช้างเผือก อ.เมืองเชียงใหม่
                      จ.เชียงใหม่ 50300
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
              </Stack>
              <Stack
                flexDirection={{ base: 'column', md: 'row' }}
                w='100%'
                justifyContent='space-between'
                spacing={10}
              >
                <Box
                  boxShadow='rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
                  borderRadius='10px'
                >
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4826.07267291714!2d99.8315903249222!3d19.867253072567436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d7099f0e9fba11%3A0x3cb8d430b21d2834!2zVGhlIGZhY2UgY2xpbmljIOC4qOC4ueC4meC4ouC5jOC4hOC4p-C4suC4oeC4h-C4suC4oeC4hOC4o-C4muC4p-C4h-C4iOC4o-C4quC4suC4guC4suC5gOC4iuC4teC4ouC4h-C4o-C4suC4og!5e0!3m2!1sth!2sth!4v1692517869474!5m2!1sth!2sth'
                    loading='lazy'
                    width='100%'
                    height='100%'
                    style={{
                      border: '0',
                      overflow: 'hidden',
                      borderRadius: '10px',
                    }}
                  ></iframe>
                </Box>
                <VStack
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
              </Stack>
            </Stack>
          </Stack>
        </VStack>
      </Container>
    </Layout>
  )
}
