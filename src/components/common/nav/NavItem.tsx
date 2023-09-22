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

  const isCurrentPage =
    pathname.match(/\/main\/(.*)/)?.[1] === props.text.toLowerCase()

  const handleClick = () => {
    if (props.link) {
      // router.push(props.link)
    } else if (props.func) {
      props.func()
    }
  }

  return (
    <div
      className="text-character flex justify-start items-center"
      onClick={handleClick}
    >
      <props.icon
        className={`w-10 h-10 p-2 rounded-full ${
          isCurrentPage ? 'bg-primary/10' : ''
        }`}
      />
      {props.isMini ? null : <p className="text-base ml-1">{props.text}</p>}
    </div>
  )
}

export default NavItem
