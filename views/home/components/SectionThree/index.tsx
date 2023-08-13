import {
  Center,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FaClinicMedical } from 'react-icons/fa'
import { FaUserDoctor } from 'react-icons/fa6'
import { GrCertificate } from 'react-icons/gr'
const SectionThree = () => {
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
        <Stack
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
            src='/images/products/hifu.jpg'
            height={350}
            width={350}
          />
          <Stack spacing={0}>
            <Heading
              fontFamily='LINESeedSansTH-Rg'
              size='md'
              textAlign='center'
            >
              Hifu
            </Heading>
            <Text
              fontFamily='LINESeedSansTH-Rg'
              fontSize={16}
              textAlign='center'
              color='dimgray'
            >
              ปรับหน้าเรียว
            </Text>
          </Stack>
        </Stack>

        <Stack
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
            src='/images/products/botox.jpg'
            height={350}
            width={350}
          />
          <Stack spacing={0}>
            <Heading
              fontFamily='LINESeedSansTH-Rg'
              size='md'
              textAlign='center'
            >
              Botox
            </Heading>
            <Text
              fontFamily='LINESeedSansTH-Rg'
              fontSize={16}
              textAlign='center'
              color='dimgray'
            >
              ยกหน้าให้ตึง
            </Text>
          </Stack>
        </Stack>
        <Stack
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
            src='/images/products/roymai.jpg'
            height={350}
            width={350}
          />
          <Stack spacing={0}>
            <Heading
              fontFamily='LINESeedSansTH-Rg'
              size='md'
              textAlign='center'
            >
              ร้อยไหม
            </Heading>
            <Text
              fontFamily='LINESeedSansTH-Rg'
              fontSize={16}
              textAlign='center'
              color='dimgray'
            >
              ยกกระชับใบหน้า
            </Text>
          </Stack>
        </Stack>
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
