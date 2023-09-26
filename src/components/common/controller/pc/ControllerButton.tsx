import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type Props = {
  name: string
  icon: any
  handleClick: () => void
  primary?: boolean
}

export default function PcControllerButton(props: Props) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={
            props.primary
              ? 'bg-primary py-1.5 pl-2 pr-3 border rounded text-white flex font-normal transition-opacity hover:opacity-50'
              : 'bg-card p-1.5 border rounded text-character transition-opacity hover:opacity-50'
          }
          onClick={props.handleClick}
        >
          <props.icon className="w-5 h-5" />
          {props.primary && <p className="text-sm ml-1">{props.name}</p>}
        </TooltipTrigger>
        {!props.primary && (
          <TooltipContent>
            <p>{props.name}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  )
}
