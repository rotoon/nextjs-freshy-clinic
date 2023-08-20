import { TProgram } from '@/app/page'
import { Center, Heading, Link, SimpleGrid, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'
import ProgramCard from '@/views/components/ProgramCard'

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
        justifyContent='flex-start'
        alignItems='flex-start'
      >
        {programs.map((program) => (
          <ProgramCard
            key={program.title}
            program={program}
          />
        ))}
      </SimpleGrid>
      <Center className='effect-three'>
        <Link
          fontFamily='LINESeedSansTH-Rg'
          href='/service-programs'
          as={NextLink}
          _hover={{
            textDecoration: 'none',
          }}
        >
          {`ดูบริการของ The Freshy Clinic เพิ่มเติม `}
        </Link>
      </Center>
    </Stack>
  )
}

export default SectionThree
