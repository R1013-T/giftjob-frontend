import { usePathname, useRouter } from 'next/navigation'

import ComingSoon from '@/components/common/comingSoon/ComingSoon'
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

export default function NoteSortModal(props: Props) {
  const router = useRouter()
  return (
    <Dialog open={props.isOpen} onOpenChange={props.setIsOpen}>
      <DialogContent onCloseAutoFocus={() => router.back()}>
        <DialogHeader>
          <DialogTitle>Note Sort</DialogTitle>
          <DialogDescription className="relative h-40 rounded-md overflow-hidden">
            <ComingSoon />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
