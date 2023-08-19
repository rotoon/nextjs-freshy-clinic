import { TProgram } from '@/app/page'
import {
  Center,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
const SectionThree = ({ programs }: { programs: TProgram[] }) => {
  return (
    <Stack
      spacing={{
        base: 10,
      }}
    >
      <Stack spacing={4}>
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
          as='h5'
          fontSize={[14, 16, 18, 18, 18, 18]}
          textAlign='center'
          color='gray'
        >
          เสริมความงามโดยทีมแพทย์และบุคลากรทางการแพทย์ผู้เชียวชาญจากเดอะเฟรชชี่คลินิก
        </Heading>
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
        {programs.map((program) => (
          <Stack
            key={program.title}
            justifyContent='center'
            alignItems='center'
            cursor='pointer'
            spacing={4}
          >
            <Image
              style={{
                borderRadius: 10,
              }}
              alt='hifu'
              src={program.image}
              height={350}
              width={350}
              priority
            />
            <Stack spacing={0}>
              <Heading
                fontFamily='LINESeedSansTH-Rg'
                size='md'
                textAlign='center'
              >
                {program.title}
              </Heading>
              <Text
                fontFamily='LINESeedSansTH-Rg'
                fontSize={16}
                textAlign='center'
                color='dimgray'
              >
                {program.desc}
              </Text>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
      <Center>
        <Link fontFamily='LINESeedSansTH-Rg'>
          ดูบริการของ The Freshy Clinic เพิ่มเติม
        </Link>
      </Center>
    </Stack>
  )
}

export default SectionThree
