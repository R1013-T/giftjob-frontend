import { usePathname, useRouter } from 'next/navigation'

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

export default function PeopleAddModal(props: Props) {
  const router = useRouter()
  return (
    <Dialog open={props.isOpen} onOpenChange={props.setIsOpen}>
      <DialogContent onCloseAutoFocus={() => router.back()}>
        <DialogHeader>
          <DialogTitle>Add People</DialogTitle>
          <DialogDescription>people add modal</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
