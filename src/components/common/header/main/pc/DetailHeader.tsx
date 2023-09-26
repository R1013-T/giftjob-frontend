import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { usePathname, useRouter } from 'next/navigation'

type Props = {
  headerTitle: string
}

export default function PcDetailHeader(props: Props) {

  return (
    <div className='h-10 text-character flex justify-start items-center text-base'>
      <p className='ml-4 font-medium'>{props.headerTitle}</p>
    </div>
  )
}