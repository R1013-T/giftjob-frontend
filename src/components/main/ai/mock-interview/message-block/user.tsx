import { useSession } from 'next-auth/react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { SessionUser } from '@/types/session'

export function User({ text }: { text: string }) {
  const { data: session, status }: any = useSession()
  const sessionUser = session?.sessionUser as SessionUser

  return (
    <div className="p-2 flex gap-3 mt-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={sessionUser?.image} className="bg-card" />
        <AvatarFallback className="bg-primary text-white">
          {sessionUser?.name[0]}
        </AvatarFallback>
      </Avatar>
      <p>{text}</p>
    </div>
  )
}
