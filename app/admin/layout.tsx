// app/layout.tsx
import { Metadata } from 'next'
import ThemeRegistry from '@/views/components/ThemeRegistry'
import './cms.css'

export const metadata: Metadata = {
  title: 'The Freshy clinic เชียงใหม่ คลินิกเวชกรรม | ADMIN',
  description:
    'The Freshy clinic เชียงใหม่ คลินิกเวชกรรม คลินิกศัลยกรรมความงาม ครบวงจร',
  icons: {
    icon: '/favicon.ico',
  },
  robots: { index: false, follow: false },
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ThemeRegistry>{children}</ThemeRegistry>
}
