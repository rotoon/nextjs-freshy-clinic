import {
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { FaClinicMedical } from 'react-icons/fa'
import { FaUserDoctor } from 'react-icons/fa6'
import { GrCertificate } from 'react-icons/gr'
const SectionTwo = () => {
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
          ทำไมต้องเลือกเสริมความกับ The Freshy Clinic
        </Heading>
        <Heading
          fontFamily='LINESeedSansTH-Rg'
          as='h5'
          fontSize={[14, 16, 18, 18, 18, 18]}
          textAlign='center'
          color='gray'
        >
          เหตุผลที่ทุกคนต่างไว้ใจ และเลือกใช้บริการกับThefreshyclinic
        </Heading>
      </Stack>
      <SimpleGrid
        spacing={4}
        templateColumns={[
          'repeat(1, minmax(200px, 1fr))',
          'repeat(1, minmax(200px, 1fr))',
          'repeat(2, minmax(200px, 1fr))',
          'repeat(3, minmax(200px, 1fr))',
          'repeat(3, minmax(200px, 1fr))',
        ]}
      >
        <Card>
          <CardBody>
            <Stack
              spacing={4}
              justifyContent='center'
              alignItems='center'
            >
              <FaClinicMedical size={80} />
              <Heading
                fontFamily='LINESeedSansTH-Rg'
                textAlign='center'
                size='md'
              >
                คลินิกได้รับมาตรฐาน
              </Heading>
              <Text
                fontFamily='LINESeedSansTH-Rg'
                textAlign='center'
                fontSize={16}
                color='dimgray'
              >
                คลินิกของเราได้รับใบรับรองมาตรฐานสถานประกอบการเสริมความงามที่มีความพร้อม
                ทั้งด้านสถานที่ ด้านอุปกรณ์
                รวมถึงเครื่องมือต่างๆที่จำเป็นทางการแพทย์หากเกิดเหตุฉุกเฉิน
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Stack
              spacing={4}
              justifyContent='center'
              alignItems='center'
            >
              <GrCertificate size={80} />
              <Heading
                fontFamily='LINESeedSansTH-Rg'
                textAlign='center'
                size='md'
              >
                ผลิตภัณฑ์ได้รับมาตรฐาน
              </Heading>
              <Text
                fontFamily='LINESeedSansTH-Rg'
                textAlign='center'
                fontSize={16}
                color='dimgray'
              >
                ผลิตภัณฑ์ได้รับการการันตีว่ามีคุณภาพ
                และได้ผ่านการตรวจสอบจากสำนักงานคณะกรรมการอาหารและยา (อย.)
                ทำให้คุณสามารถมั่นใจว่าผลิตภัณฑ์ของเรามีคุณภาพ ปลอดภัย 100 %
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Stack
              spacing={4}
              justifyContent='center'
              alignItems='center'
            >
              <FaUserDoctor size={80} />
              <Heading
                fontFamily='LINESeedSansTH-Rg'
                textAlign='center'
                size='md'
              >
                บุคลากรที่มีความเชี่ยวชาญ
              </Heading>
              <Text
                fontFamily='LINESeedSansTH-Rg'
                textAlign='center'
                fontSize={16}
                color='dimgray'
              >
                ด้วยประสบการณ์และความเชี่ยวชาญของทีมแพทย์และบุคลากรทางการแพทย์
                ทำให้เรามีความพร้อมที่จะบริการ ให้คำปรึกษาเกี่ยวกับความงาม
                เพื่อให้คุณได้รับความพึงพอใจมากที่สุด
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
    </Stack>
  )
}

export default SectionTwo
