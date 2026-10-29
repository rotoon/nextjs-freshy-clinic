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
    mapUrl: 'https://maps.google.com/?cid=17100882395829170257',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.0528138583895!2d98.99278756955107!3d18.805058770832936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3b6dd375ac33%3A0xed5289ef4520f051!2sThe%20freshy%20clinic!5e0!3m2!1sth!2sth!4v1692517159677!5m2!1sth!2sth',
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
    mapUrl: 'https://maps.google.com/?cid=4375480343602210868',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4826.07267291714!2d99.8315903249222!3d19.867253072567436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30d7099f0e9fba11%3A0x3cb8d430b21d2834!2zVGhlIGZhY2UgY2xpbmljIOC4qOC4ueC4meC4ouC5jOC4hOC4p-C4suC4oeC4h-C4suC4oeC4hOC4o-C4muC4p-C4h-C4iOC4o-C4quC4suC4guC4suC5gOC4iuC4teC4ouC4h-C4o-C4suC4og!5e0!3m2!1sth!2sth!4v1692517869474!5m2!1sth!2sth',
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
