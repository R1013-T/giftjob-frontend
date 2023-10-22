import './globals.css'

import type { Metadata } from 'next'

import { Toaster } from '@/components/ui/toaster'
import { monaSans } from '@/utils/fonts'

export const metadata: Metadata = {
  title: 'GiftJob',
  description: 'AI Job Hunting',
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
