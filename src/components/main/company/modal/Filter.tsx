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

export default function CompanyFilterModal(props: Props) {
  const router = useRouter()
  return (
    <Dialog open={props.isOpen} onOpenChange={props.setIsOpen}>
      <DialogContent onCloseAutoFocus={() => router.back()}>
        <DialogHeader>
          <DialogTitle>Company Filter</DialogTitle>
          <DialogDescription>Company filter modal</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
