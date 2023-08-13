'use client'
import Layout from '@/views/layout'
import { HomeComponentProps } from '@/app/page'
import { Container, VStack } from '@chakra-ui/react'
import SlideShow from './components/Slideshows'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'

export default function Home({ slides }: HomeComponentProps) {
  return (
    <Layout>
      <SlideShow slides={slides?.list} />
      <Container
        w='100%'
        maxW='7xl'
        my={{ base: 4, md: 10 }}
      >
        <VStack spacing={20}>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </VStack>
      </Container>
    </Layout>
  )
}
