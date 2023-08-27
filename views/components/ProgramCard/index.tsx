import { TProgram } from '@/app/page'
import {
  Stack,
  Heading,
  Text,
  Box,
  Button,
  HStack,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import './style.css'
import { FaFacebookSquare } from 'react-icons/fa'

const ProgramCard = ({ program }: { program: TProgram }) => {
  return (
    <Box key={program.title}>
      <Stack
        justifyContent='center'
        alignItems='center'
        spacing={4}
        className='card'
      >
        <Image
          alt='hifu'
          src={program.image}
          height={350}
          width={350}
          priority
        />
        <VStack spacing={12}>
          <Stack
            className='info'
            justifyContent='center'
            alignItems='center'
            spacing={4}
          >
            <Heading
              fontFamily='LINESeedSansTH-Rg'
              textAlign='center'
              as='h1'
              size='md'
            >
              สาขาเชียงใหม่
            </Heading>
            <Button
              onClick={() =>
                window.open(`https://m.me/Thefreshyclinic.cnx/`, '_blank')
              }
              leftIcon={<FaFacebookSquare size={20} />}
            >
              Facebook
            </Button>
          </Stack>
          <Stack
            className='info'
            justifyContent='center'
            alignItems='center'
            spacing={4}
          >
            <Heading
              fontFamily='LINESeedSansTH-Rg'
              textAlign='center'
              as='h1'
              size='md'
            >
              สาขาเชียงราย
            </Heading>
            <Button
              onClick={() =>
                window.open(`https://m.me/Thefreshyclinic.cr/`, '_blank')
              }
              leftIcon={<FaFacebookSquare size={20} />}
            >
              Facebook
            </Button>
          </Stack>
        </VStack>
      </Stack>
      <Stack
        spacing={0}
        mt={4}
      >
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
    </Box>
  )
}

export default ProgramCard
