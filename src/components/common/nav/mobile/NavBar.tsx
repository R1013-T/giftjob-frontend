import {
  BuildingOfficeIcon,
  CalendarIcon,
  DocumentTextIcon,
  MinusIcon,
  PlusIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

import NavBarItem from '@/components/common/nav/mobile/NavBarItem'

const MobileNavBar = () => {
  const [isMini, setIsMini] = useState(true)

  return (
    <div
      className={`fixed z-20 shadow-xl bg-card border flex gap-4 right-2/4 translate-x-1/2 justify-center ${
        isMini
          ? 'bottom-2 rounded-full p-1'
          : 'w-full bottom-0 rounded-t-xl py-2'
      }  `}
    >
      <div
        className="absolute border bg-card right-2/4 translate-x-1/2 rounded-full -top-4 text-character w-6 h-6 p-0.5"
        onClick={() => {
          setIsMini((prev) => !prev)
        }}
      >
        {isMini ? <PlusIcon /> : <MinusIcon />}
      </div>
      <NavBarItem
        icon={BuildingOfficeIcon}
        text="Company"
        link="/main/company"
        isMini={isMini}
      />
      <NavBarItem
        icon={UserGroupIcon}
        text="People"
        link="/main/people"
        isMini={isMini}
      />
      <NavBarItem
        icon={DocumentTextIcon}
        text="Note"
        link="/main/note"
        isMini={isMini}
      />
      <NavBarItem
        icon={CalendarIcon}
        text="Calendar"
        link="/main/calendar"
        isMini={isMini}
      />
      <NavBarItem
        icon={PresentationChartLineIcon}
        text="AI"
        link="/main/ai"
        isMini={isMini}
      />
    </div>
  )
}

export default MobileNavBar
