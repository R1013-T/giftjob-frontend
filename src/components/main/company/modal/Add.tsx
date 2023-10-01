import { usePathname, useRouter } from 'next/navigation'

import AddInner from '@/components/main/company/modal/modalContent/add/AddInner'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function CompanyAddModal(props: Props) {
  const router = useRouter()
  return (
    <Dialog open={props.isOpen} onOpenChange={props.setIsOpen}>
      <DialogContent onCloseAutoFocus={() => router.back()}>
        <DialogHeader>
          <DialogTitle>Add Company</DialogTitle>
          <DialogDescription>
            <AddInner setIsOpen={props.setIsOpen} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
