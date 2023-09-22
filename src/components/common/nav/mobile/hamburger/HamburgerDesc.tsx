import {
  ArrowLeftOnRectangleIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'

import NavItem from '@/components/common/nav/NavItem'
import UserCard from '@/components/user/UserCard'

const HamburgerDesc = () => {
  return (
    <div>
      <UserCard />
      <div className="m-3"></div>
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
  )
}

export default HamburgerDesc