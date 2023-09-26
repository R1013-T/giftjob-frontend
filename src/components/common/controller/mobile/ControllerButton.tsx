type Props = {
  icon: any
  handleClick: () => void
  primary?: boolean
}

export default function MobileControllerButton(props: Props) {
  return (
    <props.icon
      className={`w-10 h-10 p-1.5 rounded-full ${
        props.primary && 'bg-primary/80 text-white'
      }`}
      onClick={props.handleClick}
    />
  )
}
