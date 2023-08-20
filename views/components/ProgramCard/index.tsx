import { TProgram } from '@/app/page'
import { Stack, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

const ProgramCard = ({ program }: { program: TProgram }) => {
  return (
    <Stack
      key={program.title}
      justifyContent='center'
      alignItems='center'
      cursor='pointer'
      spacing={4}
      className='grow'
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
  )
}

export default ProgramCard
