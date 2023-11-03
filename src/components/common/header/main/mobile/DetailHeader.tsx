import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { usePathname, useRouter } from 'next/navigation'

type Props = {
  headerTitle: string
}

export default function MobileDetailHeader(props: Props) {
  const pathname = usePathname()
  const router = useRouter()

  let backPath = ''
  if (pathname.split('/')[2] === 'ai' || pathname.split('/').length === 2) {
    backPath = '/main'
  } else {
    backPath = `/main/${pathname.split('/')[2]}`
  }

  return (
    <div className="h-12 text-character flex justify-start items-center text-base">
      {pathname !== '/main' && (
        <ChevronLeftIcon
          className="w-10 h-10 py-2 -mr-2"
          onClick={() => router.push('/main')}
        />
      )}
      <p className="ml-2 font-medium" onClick={() => router.push(backPath)}>
        {props.headerTitle}
      </p>
    </div>
  )
}
