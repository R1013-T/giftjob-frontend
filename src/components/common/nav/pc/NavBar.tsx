import {
  ArrowLeftOnRectangleIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  HomeIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { signOut } from 'next-auth/react'
import { useState } from 'react'

import NavItem from '@/components/common/nav/NavItem'
import UserCard from '@/components/user/UserCard'

const PcNavBar = () => {
  const [isMini, setIsMini] = useState(false)

  return (
    <div
      className={`h-screen relative border border-l flex flex-col justify-between ${
        isMini ? 'w-16' : 'w-56'
      }`}
    >
      <div
        className="absolute top-5 -right-2.5 p-0.5 h-5 w-5 text-character z-10 bg-card border rounded-full cursor-pointer"
        onClick={() => setIsMini(!isMini)}
      >
        {isMini ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </div>
      <div className="mt-3">
        {isMini ? (
          <div className="mx-auto grid place-items-center">
            <Image
              src="https://raw.githubusercontent.com/R1013-T/giftjob-frontend/fe5d2e1f7c3ddb0234ba345d102e012619b342f7/public/giftjob_Icon.svg"
              alt="giftjob"
              width={40}
              height={40}
            />
          </div>
        ) : (
          <div className="flex justify-between items-end mx-3">
            <Image
              src="https://raw.githubusercontent.com/R1013-T/giftjob-frontend/fe5d2e1f7c3ddb0234ba345d102e012619b342f7/public/giftjob_logo.svg"
              alt="giftjob"
              width={140}
              height={40}
            />
            <p className="text-xs text-character">v1.0</p>
          </div>
        )}
        <div className={`mt-3 ${!isMini && 'ml-2'}`}>
          <NavItem
            icon={HomeIcon}
            text="Dashboard"
            link="/main"
            isMini={isMini}
          />
          <NavItem
            icon={BuildingOfficeIcon}
            text="Company"
            link="/main/company"
            isMini={isMini}
          />
          <NavItem
            icon={UserGroupIcon}
            text="People"
            link="/main/people"
            isMini={isMini}
          />
          <NavItem
            icon={DocumentTextIcon}
            text="Note"
            link="/main/note"
            isMini={isMini}
          />
          <NavItem
            icon={CalendarIcon}
            text="Calendar"
            link="/main/calendar"
            isMini={isMini}
          />
          <NavItem
            icon={PresentationChartLineIcon}
            text="AI"
            link="/main/ai"
            isMini={isMini}
          />
        </div>
      </div>
      <div className={`mb-3 ${!isMini && 'ml-2'}`}>
        <div className={`${!isMini ? 'mr-2' : ''} mb-3`}>
          <UserCard isMini={isMini} />
        </div>
        <NavItem
          icon={ArrowLeftOnRectangleIcon}
          text="SignOut"
          func={() => {
            signOut()
          }}
          isMini={isMini}
        />
        <NavItem
          icon={Cog6ToothIcon}
          text="Settings"
          link="/main/settings"
          isMini={isMini}
        />
        <NavItem
          icon={ChatBubbleLeftRightIcon}
          text="Contact"
          func={() => {
            console.log('contact')
          }}
          isMini={isMini}
        />
      </div>
    </div>
  )
}

export default PcNavBar
