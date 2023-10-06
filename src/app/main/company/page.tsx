'use client'

import { useSession } from 'next-auth/react'

import CompanyView from '@/components/main/company/view/CompanyView'
import MainContentWrapper from '@/components/main/MainContentWrapper'
import type { SessionUser } from '@/types/session'

export default function Company() {
  const { data: session, status }: any = useSession()
  const sessionUser = session?.sessionUser as SessionUser

  return (
    <MainContentWrapper>
      <CompanyView userId={sessionUser?.id} />
    </MainContentWrapper>
  )
}
