// app/layout.tsx
import { Metadata } from 'next'
import ThemeRegistry from '@/Components/ThemeRegistry'

export const metadata: Metadata = {
  title: 'The Freshy clinic เชียงใหม่ คลินิกเวชกรรม | ADMIN',
  description:
    'The Freshy clinic เชียงใหม่ คลินิกเวชกรรม คลินิกศัลยกรรมความงาม ครบวงจร',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ThemeRegistry>{children}</ThemeRegistry>
}
