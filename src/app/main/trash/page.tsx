'use client'

import { useSession } from 'next-auth/react'

import TrashCompany from '@/components/main/trash/Company'
import TrashNote from '@/components/main/trash/Note'
import TrashPeople from '@/components/main/trash/People'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { SessionUser } from '@/types/session'

export default function Trash() {
  const { data: session, status }: any = useSession()
  const sessionUser = session?.sessionUser as SessionUser

  return (
    <div>
      <Tabs defaultValue="company" className="w-full p-2">
        <TabsList>
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
          <TabsTrigger value="note">Note</TabsTrigger>
        </TabsList>
        <TabsContent value="company">
          <TrashCompany userId={sessionUser?.id} />
        </TabsContent>
        <TabsContent value="people">
          <TrashPeople userId={sessionUser?.id} />
        </TabsContent>
        <TabsContent value="note">
          <TrashNote userId={sessionUser?.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
