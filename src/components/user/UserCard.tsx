'use client'
import { useSession } from 'next-auth/react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import type { SessionUser } from '@/types/session'

type Props = {
  isMini?: boolean
}

const UserCard = (props: Props) => {
  const { data: session, status }: any = useSession()
  const sessionUser = session?.sessionUser as SessionUser

  if (props.isMini) {
    return (
      <Avatar className="mb-2 mx-auto cursor-pointer">
        <AvatarImage src={sessionUser?.image} />
        <AvatarFallback className="bg-primary" />
      </Avatar>
    )
  }

  return (
    <div className="border bg-popover p-2 rounded mt-4 flex justify-items-start cursor-pointer overflow-x-scroll hide-scrollbar">
      {status === 'loading' ? (
        <>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-11 w-11 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[120px]" />
            </div>
          </div>
        </>
      ) : (
        <>
          <Avatar>
            <AvatarImage src={sessionUser?.image} className="bg-card" />
            <AvatarFallback className="bg-primary" />
          </Avatar>
          <div className="ml-2 w-full text-left">
            <p className="text-base text-title">{sessionUser?.name}</p>
            <p className="text-xs text-character">{sessionUser?.email}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default UserCard
