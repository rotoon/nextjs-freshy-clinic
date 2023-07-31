import Home from '@/views/home'

export interface HomeComponentProps {
  slides: {
    total: number
    list: {
      id: string
      image: string
      createdAt: string
      type: string
      order: number
      updatedAt: string
    }[]
  }
}

async function getData() {
  const url =
    'https://asia-southeast1-nextjs-freshy-clinic.cloudfunctions.net/slide'

  const [res] = await Promise.all([
    await fetch(url, { next: { revalidate: 0 } }),
  ])
  if (res.status !== 200) {
    throw new Error('Failed to fetch data')
  }
  const [slides] = await Promise.all([res.json()])

  return {
    slides,
  }
}

export default async function Index() {
  const { slides }: HomeComponentProps = await getData()

  return (
    <main>
      <Home slides={slides} />
    </main>
  )
}
