import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type Props = {
  link: string
}

export default function BackButton(props: Props) {
  return (
    <div className="flex items-center gap-1 hover:underline text-character text-sm">
      <ArrowLeftIcon className="w-4 h-4" />
      <Link href={props.link}>back</Link>
    </div>
  )
}
