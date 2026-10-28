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
import { branches, clinicQuestions } from '@/lib/site'

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
              as='p'
              fontSize={[14, 16, 18, 18, 18, 18]}
              textAlign='center'
              color='gray'
            >
              คลินิกเสริมความงามที่เนรมิตความสวยให้คุณด้วยหัวใจ
            </Heading>
            <Stack spacing={10}>
              <Stack
                id={branches[0].id}
                scrollMarginTop='10rem'
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
                    title='แผนที่ The Freshy Clinic สาขาเชียงใหม่'
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
                  <Heading as='h2' size='sm'>ติดต่อเรา {branches[0].name}</Heading>
                  <Text>เปิดทุกวัน {branches[0].opens}–{branches[0].closes} น.</Text>
                  <HStack alignItems='start'>
                    <Text mt='0.15rem'>
                      <ImLocation />
                    </Text>
                    <Text
                      lineHeight='20px'
                      fontFamily='LINESeedSansTH-Rg'
                    >
                      {branches[0].address}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text>
                      <FaEnvelope />
                    </Text>
                    <Text
                      as={Link}
                      target='_blank'
                      href={`mailto:${branches[0].email}`}
                    >
                      {branches[0].email}
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
                        href={`tel:${branches[0].telephone}`}
                        target='_blank'
                        as={Link}
                      >
                        {branches[0].displayTelephone}
                      </Text>
                    </VStack>
                  </HStack>
                  <Link href={branches[0].facebook} isExternal>
                    Facebook {branches[0].name}
                  </Link>
                </VStack>
              </Stack>
              <Stack
                id={branches[1].id}
                scrollMarginTop='10rem'
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
                    title='แผนที่ The Freshy Clinic สาขาเชียงราย'
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
                  <Heading as='h2' size='sm'>ติดต่อเรา {branches[1].name}</Heading>
                  <Text>เปิดทุกวัน {branches[1].opens}–{branches[1].closes} น.</Text>
                  <HStack alignItems='start'>
                    <Text mt='0.15rem'>
                      <ImLocation />
                    </Text>
                    <Text
                      lineHeight='20px'
                      fontFamily='LINESeedSansTH-Rg'
                    >
                      {branches[1].address}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text>
                      <FaEnvelope />
                    </Text>
                    <Text
                      as={Link}
                      target='_blank'
                      href={`mailto:${branches[1].email}`}
                    >
                      {branches[1].email}
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
                        href={`tel:${branches[1].telephone}`}
                        target='_blank'
                        as={Link}
                      >
                        {branches[1].displayTelephone}
                      </Text>
                    </VStack>
                  </HStack>
                  <Link href={branches[1].facebook} isExternal>
                    Facebook {branches[1].name}
                  </Link>
                </VStack>
              </Stack>
            </Stack>
          </Stack>
          <Stack as='section' spacing={6} maxW={800} w='100%' fontFamily='LINESeedSansTH-Rg'>
            <Heading as='h2' size='lg'>คำถามเกี่ยวกับสาขาและการจองคิว</Heading>
            {clinicQuestions.map(({ question, answer }) => (
              <Stack key={question} spacing={2}>
                <Heading as='h3' size='md'>{question}</Heading>
                <Text>{answer}</Text>
              </Stack>
            ))}
            <Link href='/service-programs' color='#7946b6'>ดูรายการบริการของเรา</Link>
          </Stack>
        </VStack>
      </Container>
    </Layout>
  )
}
