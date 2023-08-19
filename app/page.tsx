import Home from '@/views/home'
import { Timestamp } from 'firebase/firestore'

export interface HomeComponentProps {
  slides: {
    total: number
    list: TSlide[]
  }
  programs: {
    total: number
    list: TProgram[]
  }
}

export type TProgram = {
  createdAt: Timestamp
  desc: string
  image: string
  isRecommend: boolean
  order: number
  title: string
  updatedAt: Timestamp
}

export type TSlide = {
  id: string
  image: string
  createdAt: string
  type: string
  order: number
  updatedAt: string
}

async function getData() {
  const url =
    'https://asia-southeast1-nextjs-freshy-clinic.cloudfunctions.net/slide'
  const url2 =
    'https://asia-southeast1-nextjs-freshy-clinic.cloudfunctions.net/programs/recomend'
  const [res, res2] = await Promise.all([
    await fetch(url, { next: { revalidate: 0 } }),
    await fetch(url2, { next: { revalidate: 0 } }),
  ])
  if (res.status !== 200 || res2.status !== 200) {
    throw new Error('Failed to fetch data')
  }
  const [slides, programs] = await Promise.all([res.json(), res2.json()])

  return {
    slides,
    programs,
  }
}

export default async function Index() {
  const { slides, programs }: HomeComponentProps = await getData()

  return (
    <main>
      <Home
        slides={slides}
        programs={programs}
      />
    </main>
  )
}
