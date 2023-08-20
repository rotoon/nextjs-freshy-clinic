'use client'
import Layout from '@/views/layout'
import {
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Center,
} from '@chakra-ui/react'
import Image from 'next/image'

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
          </Stack>
        </VStack>
      </Container>
    </Layout>
  )
}
