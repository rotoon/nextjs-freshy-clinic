import { TProgram } from '@/app/page'
import { optimizedProgramImages } from '@/lib/program-images'
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
import { branches } from '@/lib/site'
import { programLink } from '@/lib/program-links'
import Link from 'next/link'

const ProgramCard = ({ program, headingLevel = 'h2' }: { program: TProgram; headingLevel?: 'h2' | 'h3' }) => {
  const { anchor, path } = programLink(program.id)
  return (
    <Box
      as='article'
      id={anchor}
      aria-labelledby={`${anchor}-title`}
      scrollMarginTop={{ base: '5rem', lg: '10rem' }}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Stack
        justifyContent='center'
        alignItems='center'
        spacing={4}
        className='card'
      >
        <Image
          alt={program.title}
          src={optimizedProgramImages[program.image] ?? program.image}
          height={350}
          width={350}
          sizes='350px'
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
              as='p'
              className='branch-label'
              size='md'
            >
              สาขาเชียงใหม่
            </Heading>
            <Button
              as='a'
              href={branches[0].messenger}
              target='_blank'
              rel='noopener noreferrer'
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
              as='p'
              className='branch-label'
              size='md'
            >
              สาขาเชียงราย
            </Heading>
            <Button
              as='a'
              href={branches[1].messenger}
              target='_blank'
              rel='noopener noreferrer'
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
          as={headingLevel}
          id={`${anchor}-title`}
          fontFamily='LINESeedSansTH-Rg'
          size='md'
          textAlign='center'
        >
          <Link href={path}>{program.title}</Link>
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
