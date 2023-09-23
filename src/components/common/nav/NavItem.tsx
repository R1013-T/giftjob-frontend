import { usePathname, useRouter } from 'next/navigation'

type Props = {
  icon: any
  text: string
  link?: string
  func?: () => void
  isMini?: boolean
}

const NavItem = (props: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  let isCurrentPage =
    pathname.match(/\/main\/(.*)/)?.[1] === props.text.toLowerCase()
  isCurrentPage =
    pathname == '/main' && props.text == 'Dashboard' ? true : isCurrentPage

  const handleClick = () => {
    if (props.link) {
      router.push(props.link)
    } else if (props.func) {
      props.func()
    }
  }

  if (props.isMini) {
    return (
      <div
        className={`mx-auto w-10 h-10 cursor-pointer rounded-full ${
          isCurrentPage ? 'text-primary bg-primary/10' : 'text-character'
        }`}
        onClick={handleClick}
      >
       <props.icon className="w-10 h-10 p-2" />
      </div>
    )
  }

  return (
    <div
      className={`flex justify-start items-center cursor-pointer rounded-l-md ${
        isCurrentPage ? 'text-primary bg-primary/10' : 'text-character'
      }`}
      onClick={handleClick}
    >
      <props.icon className="w-10 h-10 p-2" />
      <p className="text-base ml-1">{props.text}</p>
    </div>
  )
}

export default NavItem
