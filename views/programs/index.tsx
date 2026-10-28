'use client'
import { ProgramsComponentProps } from '@/app/service-programs/page'
import Layout from '@/views/layout'
import {
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  SimpleGrid,
} from '@chakra-ui/react'
import ProgramCard from '../components/ProgramCard'

export default function Programs({ programs }: ProgramsComponentProps) {
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
              บริการเสริมความงามของ The Freshy Clinic
            </Heading>
            <Heading
              fontFamily='LINESeedSansTH-Rg'
              as='p'
              fontSize={[14, 16, 18, 18, 18, 18]}
              textAlign='center'
              color='gray'
            >
              เสริมความงามโดยทีมแพทย์และบุคลากรทางการแพทย์ผู้เชียวชาญจากเดอะเฟรชชี่คลินิก
            </Heading>
            <Text fontFamily='LINESeedSansTH-Rg' textAlign='center'>
              ดูรายการบริการของ The Freshy Clinic สาขาเชียงใหม่และเชียงรายด้านล่าง
              ติดต่อสาขาที่สะดวกเพื่อสอบถามรายละเอียด ราคา และคิวเข้ารับบริการ
            </Text>
          </Stack>
          <SimpleGrid
            spacing={10}
            templateColumns={[
              'repeat(1, minmax(200px, 1fr))',
              'repeat(1, minmax(200px, 1fr))',
              'repeat(2, minmax(200px, 1fr))',
              'repeat(3, minmax(200px, 1fr))',
              'repeat(3, minmax(200px, 1fr))',
            ]}
            justifyContent='center'
            alignItems='center'
          >
            {programs?.list.map((program) => (
              <ProgramCard
                program={program}
                key={program.id}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Layout>
  )
}
