'use client'

import { useSession } from 'next-auth/react'

import ViewController from '@/components/common/controller/ViewController'
import MainContentWrapper from '@/components/main/MainContentWrapper'
import PeopleView from '@/components/main/people/view/PeopleView'
import type { SessionUser } from '@/types/session'

export default function People() {
  const { data: session, status }: any = useSession()
  const sessionUser = session?.sessionUser as SessionUser

  return (
    <MainContentWrapper>
      <ViewController />
      <PeopleView userId={sessionUser?.id} />
    </MainContentWrapper>
  )
}
