import { Bars3Icon } from '@heroicons/react/24/outline'

import HamburgerDesc from '@/components/common/nav/mobile/hamburger/HamburgerDesc'
import HamburgerTitle from '@/components/common/nav/mobile/hamburger/HamburgerTitle'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const Hamburger = () => {
  return (
    <Sheet>
      <SheetTrigger className="fixed top-2 right-2 border rounded">
        <Bars3Icon className="w-8 h-8  p-1.5" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <HamburgerTitle />
          </SheetTitle>
          <HamburgerDesc />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default Hamburger
