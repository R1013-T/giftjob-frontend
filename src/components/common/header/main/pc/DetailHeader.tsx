import { usePathname, useRouter } from 'next/navigation'

type Props = {
  headerTitle: string
}

export default function PcDetailHeader(props: Props) {
  const router = useRouter()
  const pathname = usePathname()

  let backPath = ''
  if (pathname.split('/')[2] === 'ai' || pathname.split('/').length === 2) {
    backPath = '/main'
  } else {
    backPath = `/main/${pathname.split('/')[2]}`
  }
  return (
    <div className="h-12 text-character flex justify-start items-center text-lg">
      <p
        className="ml-4 font-medium cursor-pointer"
        onClick={() => router.push(backPath)}
      >
        {props.headerTitle}
      </p>
    </div>
  )
}
