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

export default function About() {
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
              ทำความรู้จัก The Freshy Clinic
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
            <Text
              fontFamily='LINESeedSansTH-Rg'
              fontSize={[14, 16, 18, 18, 18, 18]}
            >
              The Freshy Clinic คลินิกเสริมความงาม
              ก่อตั้งโดยทีมผู้เชี่ยวชาญเฉพาะทางหัตถการด้านความงาม
              มีประสบการณ์ในวงการด้านเสริมความงามมากกว่า 10 ปี
              อีกทั้งยังมีอุปกรณ์ เครื่องมือ
              เทคโนโลยีที่ทันสมัยและได้รับมาตรฐานพร้อมทั้งเทคนิคการเสริมความงามพิเศษเฉพาะตัว
              ที่จะเนรมิตใบหน้า รูปร่างของคุณให้มีมิติ
              และสวยงามอย่างเป็นธรรมชาติ หรือตามแบบที่คุณต้องการ
              เพื่อให้ผลลัพธ์ออกมาดีที่สุด
            </Text>
            <Center>
              <Image
                alt='about-us'
                src='/images/about/1.jpg'
                width={800}
                height={450}
                sizes='(max-width: 832px) calc(100vw - 32px), 800px'
              />
            </Center>
            <Text
              fontFamily='LINESeedSansTH-Rg'
              fontSize={[14, 16, 18, 18, 18, 18]}
            >
              โดย The Freshy Clinic
              เรามีทีมแพทย์และบุคลากรผู้เชี่ยวชาญคอยให้คำปรึกษาและแนะนำบริการเกี่ยวกับความสวยความงามอย่างตรงไปตรงมาเพื่อให้คุณได้รับความพึงพอใจมากที่สุด
              ทั้งนี้ The Freshy Clinic
              ยังมีบริการปรึกษาหรือสอบถามบริการทางออนไลน์ ไม่ว่าคุณจะอยู่ที่ไหน
              คุณก็สามารถขอคำแนะนำหรือปรึกษาเกี่ยวกับบริการด้านความงามได้
              ซึ่งคุณจะได้รับบริการที่สะดวก รวดเร็ว
              แถวยังไม่ต้องเดินทางให้เสียเวลา เพียงแค่ติดต่อทางออนไลน์
              ไม่ว่าจะเป็น Facebook page Instagram Line official Tiktok Google
              รวมถึงเบอร์โทรศัพท์ คุณจะได้รับบริการที่ครบถ้วนตามที่คุณต้องการ
              อยากสวย ดูดี ครบทุกมิติ ติดต่อ The Freshy Clinic สิคะ
            </Text>
            <Center>
              <Image
                alt='about-us1'
                src='/images/about/2.jpg'
                width={800}
                height={600}
                sizes='(max-width: 832px) calc(100vw - 32px), 800px'
              />
            </Center>
            <Text
              fontFamily='LINESeedSansTH-Rg'
              fontSize={[14, 16, 18, 18, 18, 18]}
            >
              The Freshy Clinic
              ให้ความสำคัญในเรื่องมาตรฐานการบริการเป็นอันดับแรก
              ไม่ว่าจะเป็นมาตรฐานความปลอดภัยของอุปกรณ์และเครื่องมือทางการแพทย์
              ผลิตภัณฑ์ตัวยาแท้ 100 %
              นำเข้าจากต่างประเทศและมีใบรับรองมาตรฐานถูกต้องตามกฏหมาย
              ความสะอาดและปลอดภัยของสถานบริการเสริมความงาม
              มีการจำกัดจำนวนผู้เข้ารับบริการโดยการลงคิวการนัดรับบริการเพื่อความปลอดภัยของลูกค้าทุกท่าน
              รวมไปถึงบุคลิก การบริการของพนักงานที่จะมาให้บริการคุณดุจญาติมิตร
              ด้วยความใส่ใจทั้งหมดนี้ คุณจึงมั่นใจในการบริการเสริมคงามงามจาก The
              Freshy Clinic ได้อย่างแน่นอน
            </Text>
          </Stack>
          <Center>
            <VStack color='#B06DFF'>
              <Heading
                fontFamily='LINESeedSansTH-Rg'
                textAlign='center'
                fontSize={[18, 20, 22, 24, 26, 28]}
              >{`ให้คุณ 'พึงพอใจ' กับทุกความสวย`}</Heading>
              <Heading
                textAlign='center'
                fontFamily='LINESeedSansTH-Rg'
                fontSize={[18, 20, 22, 24, 26, 28]}
              >{`ที่ The Freshy Clinic คลินิกเสริมความงาม`}</Heading>
            </VStack>
          </Center>
          <Stack
            spacing={6}
            maxW={800}
          >
            <Heading
              size='md'
              fontFamily='LINESeedSansTH-Rg'
              textAlign='center'
            >
              The Freshy Clinic ปัจจุบันเปิดให้บริการเสริมความมาแล้ว 5 ปี
              โดยมีสาขาเชียงใหม่และสาขาเชียงราย
              คุณจึงมั่นใจได้กับการบริการของเรา
            </Heading>
            <Center>
              <Image
                alt='map-cm'
                src='/images/about/cm.jpg'
                width={800}
                height={600}
                sizes='(max-width: 832px) calc(100vw - 32px), 800px'
              />
            </Center>
            <Center>
              <Text
                fontFamily='LINESeedSansTH-Rg'
                fontSize={[14, 16, 18, 18, 18, 18]}
                textAlign='center'
              >
                สาขาเชียงใหม่ ตั้งอยู่ โครงการใหม่ หลัง ม.ราชภัฎเชียงใหม่
                อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่ เปิดให้บริการทุกวัน
                ตั้งแต่เวลา 12.00 น. - 20.00 น.
                โดยมีพนักงานคอยต้อนรับและดูแลตลอดเวลา
              </Text>
            </Center>

            <Center>
              <Image
                alt='map-cm'
                src='/images/about/cr.jpg'
                width={800}
                height={600}
                sizes='(max-width: 832px) calc(100vw - 32px), 800px'
              />
            </Center>
            <Center>
              <Text
                fontFamily='LINESeedSansTH-Rg'
                fontSize={[14, 16, 18, 18, 18, 18]}
                textAlign='center'
              >
                สาขาเชียงราย ตั้งอยู่ ทางเข้าตลาดล้านเมือง ประมาณ 200 เมตร
                จังหวัดเชียงราย เปิดให้บริการทักวัน ตั้งแต่เวลา 11.00 น. - 20.00
                น. โดยมีพนักงานคอยดูแลและต้อนรับตลอดเวลา
                โดยมีพนักงานคอยต้อนรับและดูแลตลอดเวลา
              </Text>
            </Center>
          </Stack>
        </VStack>
      </Container>
    </Layout>
  )
}
