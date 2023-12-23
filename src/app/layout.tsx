import './globals.css'

import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/toaster'
import { monaSans } from '@/utils/fonts'

export const metadata: Metadata = {
  title: 'GiftJob',
  description: 'AI就活管理アプリ',
  keywords: ['GiftJob', '就活補助', 'エントリーシート添削', '模擬面接', 'AI'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://giftjob-frontend.vercel.app/',
    title: 'GiftJob',
    description: 'AI就活管理アプリ',
    images: [
      {
        url: 'https://raw.githubusercontent.com/R1013-T/giftjob-frontend/894f2d1417c5af0d1ee1bf9a7506da229e893487/public/giftjob_icon.png',
        width: 256,
        height: 256,
        alt: 'GiftJob',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${monaSans.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
