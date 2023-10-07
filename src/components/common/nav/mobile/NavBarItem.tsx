import { usePathname, useRouter } from 'next/navigation'

type NavIconProps = {
  icon: any
  text: string
  link: string
  isMini: boolean
}

const NavBarItem = (props: NavIconProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const isCurrentPage = pathname.split('/')[2] === props.text.toLowerCase()

  const handelChangePage = () => {
    if (pathname === '/main' || !isCurrentPage) {
      router.push(props.link)
    } else if (isCurrentPage) {
      router.push('/main')
    }
  }

  return (
    <div
      className={`flex flex-col items-center rounded-full ${
        isCurrentPage ? 'text-primary' : 'text-character'
      }`}
      onClick={() => handelChangePage()}
    >
      <props.icon
        className={`w-10 h-10 p-1.5 rounded-full ${
          isCurrentPage ? 'bg-primary/10' : ''
        }`}
      />
      {props.isMini ? null : <p className="text-xs mt-1">{props.text}</p>}
    </div>
  )
}

export default NavBarItem
