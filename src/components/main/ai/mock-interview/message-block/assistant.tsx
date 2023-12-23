import React from 'react'

import { Avatar, AvatarImage } from '@/components/ui/avatar'

export default function Assistant({ text }: { text: string }) {
  return (
    <div className="p-2 flex gap-3 mt-2 text-title">
      <Avatar className="h-7 w-7">
        <AvatarImage src="/openai.svg" alt="assistant" />
      </Avatar>
      <p className="mt-0.5">{text}</p>
    </div>
  )
}
