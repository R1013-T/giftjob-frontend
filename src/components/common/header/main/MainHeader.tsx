'use client'

import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

import MobileDetailHeader from '@/components/common/header/main/mobile/DetailHeader'
import PcDetailHeader from '@/components/common/header/main/pc/DetailHeader'
import { useIsPcStore } from '@/store/common/isPcStore'
import type { SessionUser } from '@/types/session'
import capitalizeFirstLetter from '@/utils/common/capitalizeFirstLetter'

export default function MainHeader() {
  const isPc = useIsPcStore((state) => state.isPc)

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
  } else if (pathname === '/main/ai') {
    headerTitle = 'AI JobHunting Management'
  } else {
    headerTitle = capitalizeCurrentPage
  }

  return (
    <header className="w-full border-b">
      {isPc ? (
        <PcDetailHeader headerTitle={headerTitle} />
      ) : (
        <MobileDetailHeader headerTitle={headerTitle} />
      )}
    </header>
  )
}
