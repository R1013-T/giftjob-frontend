import { XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname, useRouter } from 'next/navigation'

import AddInner from '@/components/main/company/modal/add/AddInner'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function CompanyAddModal(props: Props) {
  const router = useRouter()
  return (
    <AlertDialog open={props.isOpen} onOpenChange={props.setIsOpen}>
      <AlertDialogContent>
        <AlertDialogCancel
          className="absolute top-4 right-6 text-character p-0.5 bg-card border h-auto"
          onClick={() => {
            router.back()
          }}
        >
          <XMarkIcon className="w-6 h-6" />
        </AlertDialogCancel>
        <AlertDialogTitle>Add Company</AlertDialogTitle>
        <AlertDialogDescription>
          <AddInner setIsOpen={props.setIsOpen} />
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  )
}
