'use client'

import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

import MobileDetailHeader from '@/components/common/header/main/mobile/DetailHeader'
import PcDetailHeader from '@/components/common/header/main/pc/DetailHeader'
import type { SessionUser } from '@/types/session'
import capitalizeFirstLetter from '@/utils/common/capitalizeFirstLetter'

export default function MainHeader() {
  const { data: session, status }: any = useSession()
  const sessionUser = session?.sessionUser as SessionUser
  const pathname = usePathname()

  const capitalizeCurrentPage = capitalizeFirstLetter(
    pathname.match(/\/main\/(.*)/)?.[1] ?? ''
  )

  let headerTitle = ''
  if (pathname === '/main') {
    if (status === 'loading') {
      headerTitle = 'Dashboard'
    } else {
      headerTitle = `${sessionUser?.name}’s Dashboard`
    }
  } else if (pathname.split('/')[2] === 'ai') {
    switch (pathname.split('/')[3]) {
      case 'entry-sheet':
        headerTitle = 'AI Entry Sheet Review'
        break
      case 'mock-interview':
        headerTitle = 'AI Mock Interview'
        break
      case 'self-analysis':
        headerTitle = 'AI Self Analysis'
        break
    }
  } else {
    headerTitle = capitalizeCurrentPage.split('/')[0]
  }

  return (
    <header className="w-full border-b">
      <nav className="hidden lg:block">
        <PcDetailHeader headerTitle={headerTitle} />
      </nav>
      <nav className="block lg:hidden">
        <MobileDetailHeader headerTitle={headerTitle} />
      </nav>
    </header>
  )
}
