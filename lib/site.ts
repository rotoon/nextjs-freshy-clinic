export const siteUrl = 'https://www.thefreshyclinic.com'
export const siteName = 'The Freshy Clinic'

export const publicPages = {
  '/': {
    title: 'คลินิกเสริมความงาม เชียงใหม่ เชียงราย | The Freshy Clinic',
    description: 'The Freshy Clinic คลินิกเสริมความงามสาขาเชียงใหม่และเชียงราย ดูรายการบริการ ข้อมูลคลินิก เวลาเปิดทำการ และช่องทางติดต่อสอบถามหรือจองคิวกับสาขาที่สะดวก',
  },
  '/about-us': {
    title: 'เกี่ยวกับคลินิกและสาขา | The Freshy Clinic',
    description: 'ทำความรู้จัก The Freshy Clinic คลินิกเสริมความงามในเชียงใหม่และเชียงราย ดูข้อมูลคลินิก บรรยากาศ ที่ตั้ง และเวลาเปิดทำการของแต่ละสาขาก่อนเข้ารับบริการ',
  },
  '/service-programs': {
    title: 'บริการเสริมความงาม เชียงใหม่ เชียงราย | The Freshy Clinic',
    description: 'ดูรายการบริการเสริมความงามของ The Freshy Clinic สาขาเชียงใหม่และเชียงราย พร้อมรายละเอียดโปรแกรม และช่องทางสอบถามข้อมูล ราคา และจองคิวกับคลินิกโดยตรง',
  },
  '/contact-us': {
    title: 'ติดต่อและจองคิว เชียงใหม่ เชียงราย | The Freshy Clinic',
    description: 'ติดต่อ The Freshy Clinic เชียงใหม่ โทร 097 196 3312 และเชียงราย โทร 095 794 3443 ดูที่อยู่ เวลาเปิดทำการ แผนที่ และคำถามเกี่ยวกับการติดต่อจองคิว',
  },
}

export const branches = [
  {
    id: 'chiang-mai',
    name: 'สาขาเชียงใหม่',
    streetAddress: '76/2 ถ.หมื่นด้ามพร้าคต ต.ช้างเผือก',
    locality: 'เมืองเชียงใหม่',
    province: 'เชียงใหม่',
    postalCode: '50300',
    address: '76/2 ถ.หมื่นด้ามพร้าคต ต.ช้างเผือก อ.เมืองเชียงใหม่ จ.เชียงใหม่ 50300',
    telephone: '+66971963312',
    displayTelephone: '097 196 3312',
    email: 'thefreshyclinic.cnx@gmail.com',
    opens: '12:00',
    closes: '20:00',
    facebook: 'https://www.facebook.com/Thefreshyclinic.cnx/',
    messenger: 'https://m.me/Thefreshyclinic.cnx/',
  },
  {
    id: 'chiang-rai',
    name: 'สาขาเชียงราย',
    streetAddress: '66/42 ม.11 ต.สันทราย',
    locality: 'เมืองเชียงราย',
    province: 'เชียงราย',
    postalCode: '57000',
    address: '66/42 ม.11 ต.สันทราย อ.เมืองเชียงราย จ.เชียงราย 57000',
    telephone: '+66957943443',
    displayTelephone: '095 794 3443',
    email: 'thefreshyclinic.cr@gmail.com',
    opens: '11:00',
    closes: '20:00',
    facebook: 'https://www.facebook.com/Thefreshyclinic.cr/',
    messenger: 'https://m.me/Thefreshyclinic.cr/',
  },
] as const

export const clinicQuestions = [
  {
    question: 'The Freshy Clinic มีสาขาที่ไหนบ้าง?',
    answer: `มี 2 สาขา ได้แก่ ${branches[0].name} ${branches[0].address} และ${branches[1].name} ${branches[1].address}`,
  },
  {
    question: 'แต่ละสาขาเปิดเวลาไหน?',
    answer: `${branches[0].name}เปิดทุกวัน ${branches[0].opens}–${branches[0].closes} น. และ${branches[1].name}เปิดทุกวัน ${branches[1].opens}–${branches[1].closes} น. ติดต่อสาขาที่ต้องการเพื่อสอบถามคิวก่อนเดินทาง`,
  },
  {
    question: 'ติดต่อสอบถามหรือจองคิวได้อย่างไร?',
    answer: `โทร${branches[0].name} ${branches[0].displayTelephone} หรือ${branches[1].name} ${branches[1].displayTelephone} หรือติดต่อผ่าน Facebook ของแต่ละสาขาเพื่อสอบถามข้อมูลและจองคิว`,
  },
  {
    question: 'ดูบริการและสอบถามราคาปัจจุบันได้ที่ไหน?',
    answer: 'ดูรายการโปรแกรมได้ที่หน้าบริการของเรา และติดต่อสาขาที่สะดวกเพื่อสอบถามราคา รายละเอียด และเงื่อนไขปัจจุบันก่อนจองคิว',
  },
]
