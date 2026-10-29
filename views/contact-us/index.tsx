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
} from '@chakra-ui/react'
import Image from 'next/image'
import { FaEnvelope } from 'react-icons/fa'
import { ImLocation, ImPhone } from 'react-icons/im'
import { branches, clinicQuestions } from '@/lib/site'
import MapEmbed from './MapEmbed'

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
                <MapEmbed
                  title='แผนที่ The Freshy Clinic สาขาเชียงใหม่'
                  embedUrl={branches[0].mapEmbedUrl}
                  mapUrl={branches[0].mapUrl}
                />
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
                <MapEmbed
                  title='แผนที่ The Freshy Clinic สาขาเชียงราย'
                  embedUrl={branches[1].mapEmbedUrl}
                  mapUrl={branches[1].mapUrl}
                />
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
