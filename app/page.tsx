import { Metadata } from 'next'
import Home from '@/views/home'

export const metadata: Metadata = {
  title: 'The Freshy clinic เชียงใหม่ คลินิกเวชกรรม',
  description:
    'The Freshy clinic เชียงใหม่ คลินิกเวชกรรม คลินิกศัลยกรรมความงาม ครบวงจร',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function Index() {
  return (
    <main>
      <Home />
    </main>
  )
}
