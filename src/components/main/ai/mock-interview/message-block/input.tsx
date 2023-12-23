import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function UserInput({
  fetchMockInterview,
}: {
  fetchMockInterview: (currentMessage: string) => void
}) {
  const [currentMessage, setCurrentMessage] = useState('')

  return (
    <div className="absolute bottom-20 lg:bottom-3 right-3 left-3 p-1 bg-card border-2 rounded-md text-title flex items-end">
      <Textarea
        className="border-none min-h-0 bg-card focus-visible:ring-0 focus-visible:ring-offset-0 text-base resize-none"
        rows={1}
        onInput={(e) => {
          e.currentTarget.style.height = 'auto'
          e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px'
        }}
        value={currentMessage}
        onChange={(e) => {
          setCurrentMessage(e.target.value)
        }}
      />
      <Button
        className="w-10 h-10 ml-1 p-0 flex hover:bg-popover/20 justify-center items-center border bg-popover rounded-md cursor-pointer"
        onClick={() => {
          if (currentMessage === '') return
          setCurrentMessage('')
          fetchMockInterview(currentMessage)
        }}
      >
        <PaperAirplaneIcon className="h-7 w-7 text-primary" />
      </Button>
    </div>
  )
}
