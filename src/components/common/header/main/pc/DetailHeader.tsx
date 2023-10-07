import { usePathname, useRouter } from 'next/navigation'

type Props = {
  headerTitle: string
}

export default function PcDetailHeader(props: Props) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="h-12 text-character flex justify-start items-center text-lg">
      <p
        className="ml-4 font-medium cursor-pointer"
        onClick={() => router.push(`/main/${pathname.split('/')[2]}`)}
      >
        {props.headerTitle}
      </p>
    </div>
  )
}
