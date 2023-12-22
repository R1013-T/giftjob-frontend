import { PaperAirplaneIcon } from '@heroicons/react/24/solid'

import { Textarea } from '@/components/ui/textarea'

export default function UserInput() {
  return (
    <div className="absolute bottom-20 lg:bottom-5 right-4 left-4 p-1 bg-card border-2 rounded-md text-title flex items-end">
      <Textarea
        className="border-none bg-card focus-visible:ring-0 focus-visible:ring-offset-0 text-base resize-none"
        rows={1}
        onInput={(e) => {
          e.currentTarget.style.height = 'auto'
          e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px'
        }}
      />
      <div className="w-10 h-10 m-1.5 flex justify-center items-center border bg-popover rounded-md">
        <PaperAirplaneIcon className="h-7 w-7 text-primary" />
      </div>
    </div>
  )
}
