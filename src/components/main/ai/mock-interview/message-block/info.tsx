import { CheckIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import { Loader } from 'tabler-icons-react'

export default function Info({ text, icon }: { text: string; icon: string }) {
  return (
    <div className="border rounded-md p-2 text-character flex gap-2 items-center">
      {icon === 'loading' ? (
        <Loader className="animate-spin w-6 h-6" />
      ) : icon === 'check' ? (
        <CheckIcon className="w-6 h-6 text-primary" />
      ) : (
        <InformationCircleIcon className="w-6 h-6 text-primary" />
      )}
      <p className="text-sm mt-0.5">{text}</p>
    </div>
  )
}
