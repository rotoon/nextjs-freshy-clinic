import { Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'

const SectionOne = () => {
  return (
    <Stack
      spacing={{
        base: 10,
      }}
      flexDirection={{
        base: 'column',
        lg: 'row',
      }}
      alignItems={{
        base: 'center',
        lg: 'start',
      }}
    >
      <Heading
        as='h1'
        fontSize={[20, 22, 26, 26, 28, 30]}
        fontFamily='LINESeedSansTH-Rg'
        textAlign={{
          base: 'center',
          lg: 'start',
        }}
        display={{ base: 'block', lg: 'none' }}
      >
        The Freshy Clinic | เดอะเฟรชชี่คลินิก
      </Heading>
      <Image
        style={{
          borderRadius: '10px',
        }}
        alt='clinic'
        src='/images/93203.jpg'
        width={600}
        height={450}
        sizes='(max-width: 632px) calc(100vw - 32px), 600px'
        priority
      />
      <Stack>
        <Heading
          as='h1'
          fontSize={[26, 26, 26, 26, 28, 30]}
          fontFamily='LINESeedSansTH-Rg'
          textAlign={{
            base: 'center',
            lg: 'start',
          }}
          display={{ base: 'none', lg: 'block' }}
        >
          The Freshy Clinic | เดอะเฟรชชี่คลินิก
        </Heading>
        <Text
          fontFamily='LINESeedSansTH-Rg'
          lineHeight={7}
          fontSize={[16, 16, 16, 16, 18, 18]}
        >
          The Freshy Clinic เดอะเฟรชชี่คลินิก
          คลินิกเสริมความงามที่ก่อตั้งโดยทีมผู้เชี่ยวชาญเฉพาะทางด้านเสริมความงามโดยมีทีมแพทย์
          พยาบาล
          และบุคลากรทางการแพทย์ที่มีประสบการณ์ในด้านหัตถการและศัลยกรรมในวงการเสริมความงามมามากว่า
          10 ปี ที่พร้อมให้บริการปรึกษาและให้คำแนะนำ เพื่อให้คุณรู้สึก
          ประทับใจและพึงพอใจ ในแบบที่คุณต้องการ และที่ เดอะเฟรชชี่คลินิก
          เรายังให้ความสำคัญในเรื่องมาตรฐานการให้บริการมาเป็นอันดับหนึ่ง
          ไม่ว่าจะเป็นมาตรฐานความปลอดภัยของอุปกรณ์และเครื่องมือที่ใช้ ตัวยาแท้
          100% มีใบรับรองมาตรฐาน
          รวมไปถึงการบริการจากพนักงานที่จะมาให้บริการคุณประดุจญาติมิตร
          เพื่อให้คุณมั่นใจได้ว่าจะได้รับการบริการที่ดีที่สุดจากเรา
          หากคุณกำลังมองหาคลินิกเสริมความงามให้เดอะเฟรชชี่คลินิกได้มีโอกาสดูแลคุณ
        </Text>
      </Stack>
    </Stack>
  )
}

export default SectionOne
