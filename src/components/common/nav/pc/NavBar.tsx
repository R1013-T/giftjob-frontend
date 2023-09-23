import {
  ArrowLeftOnRectangleIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  HomeIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

import NavItem from '@/components/common/nav/NavItem'
import UserCard from '@/components/user/UserCard'

const PcNavBar = () => {
  return (
    <div className="w-44 h-screen border border-l bg-card flex flex-col justify-between">
      <div className="mt-3">
        <Image
          src="/giftjob.svg"
          alt="giftjob"
          width={145}
          height={50}
          className="mx-auto"
        />
        <div className="mt-3 ml-2">
          <NavItem icon={HomeIcon} text="Dashboard" link="/main" />
          <NavItem
            icon={BuildingOfficeIcon}
            text="Company"
            link="/main/company"
          />
          <NavItem icon={UserGroupIcon} text="People" link="/main/people" />
          <NavItem icon={DocumentTextIcon} text="Note" link="/main/note" />
          <NavItem icon={CalendarIcon} text="Calendar" link="/main/calendar" />
          <NavItem icon={PresentationChartLineIcon} text="AI" link="/main/ai" />
        </div>
      </div>
      <div className="mb-3 ml-2">
        <div className="mr-2">
          <UserCard />
        </div>
        <NavItem
          icon={ArrowLeftOnRectangleIcon}
          text="SignOut"
          func={() => {
            console.log('SignOut')
          }}
        />
        <NavItem
          icon={Cog6ToothIcon}
          text="Settings"
          func={() => {
            console.log('setting')
          }}
        />
        <NavItem
          icon={ChatBubbleLeftRightIcon}
          text="Support"
          func={() => {
            console.log('support')
          }}
        />
      </div>
    </div>
  )
}

export default PcNavBar
