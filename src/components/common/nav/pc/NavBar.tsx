import {
  ArrowLeftOnRectangleIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon, ChevronLeftIcon, ChevronRightIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  HomeIcon,
  PresentationChartLineIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'

import NavItem from '@/components/common/nav/NavItem'
import UserCard from '@/components/user/UserCard'

const PcNavBar = () => {
  const [isMini, setIsMini] = useState(false)

  return (
    <div
      className={`h-screen relative border border-l flex flex-col justify-between ${isMini ? 'w-16' : 'w-44'}`}>
      <div
        className='absolute top-5 -right-2.5 p-0.5 h-5 w-5 text-character z-10 bg-card border rounded-full'
        onClick={() => setIsMini(!isMini)}
      >
        {isMini ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </div>
      <div className='mt-3'>
        {isMini ? <Image
            src='/giftjob_mini.svg'
            alt='giftjob'
            width={40}
            height={40}
            className='mx-auto'
          /> :
          <Image
            src='/giftjob.svg'
            alt='giftjob'
            width={145}
            height={50}
            className='mx-auto'
          />
        }
        <div className={`mt-3 ${!isMini && 'ml-2'}`}>
          <NavItem icon={HomeIcon} text='Dashboard' link='/main' isMini={isMini} />
          <NavItem
            icon={BuildingOfficeIcon}
            text='Company'
            link='/main/company'
            isMini={isMini}
          />
          <NavItem icon={UserGroupIcon} text='People' link='/main/people' isMini={isMini} />
          <NavItem icon={DocumentTextIcon} text='Note' link='/main/note' isMini={isMini} />
          <NavItem icon={CalendarIcon} text='Calendar' link='/main/calendar' isMini={isMini} />
          <NavItem icon={PresentationChartLineIcon} text='AI' link='/main/ai' isMini={isMini} />
        </div>
      </div>
      <div className={`mb-3 ${!isMini && 'ml-2'}`}>
        <div className={!isMini ? 'mr-2' : ''}>
          <UserCard isMini={isMini} />
        </div>
        <NavItem
          icon={ArrowLeftOnRectangleIcon}
          text='SignOut'
          func={() => {
            console.log('SignOut')
          }}
          isMini={isMini}
        />
        <NavItem
          icon={Cog6ToothIcon}
          text='Settings'
          func={() => {
            console.log('setting')
          }}
          isMini={isMini}
        />
        <NavItem
          icon={ChatBubbleLeftRightIcon}
          text='Support'
          func={() => {
            console.log('support')
          }}
          isMini={isMini}
        />
      </div>
    </div>
  )
}

export default PcNavBar
