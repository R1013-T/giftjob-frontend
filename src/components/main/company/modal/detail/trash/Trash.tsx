import { XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

type Props = {
  trashName: string
  trashAction: () => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function CompanyDetailEditModal(props: Props) {
  const router = useRouter()

  const trashName = 'trashName'

  return (
    <AlertDialog open={props.isOpen} onOpenChange={props.setIsOpen}>
      <AlertDialogContent onCloseAutoFocus={() => router.back()}>
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
            onClick={() => props.trashAction()}
          >
            Trash
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
