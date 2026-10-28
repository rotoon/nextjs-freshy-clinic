'use client'

import dynamic from 'next/dynamic'

const CMS = dynamic(() => import('@/app/admin/CMS'), { ssr: false })

export default function Home() {
  return <CMS />
}
