import { TrashIcon } from '@heroicons/react/24/outline'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

type Props = {
  trashName: string
  onClick: () => void
}

export default function TrashAlert(props: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <TrashIcon className="w-5 h-5 text-red-400 cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Move &quot;{props.trashName}&quot; to Trash
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to move this {props.trashName} to the trash?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-400 hover:bg-red-600"
            onClick={() => props.onClick()}
          >
            Trash
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
