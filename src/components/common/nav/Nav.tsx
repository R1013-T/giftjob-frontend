import Hamburger from '@/components/common/nav/mobile/hamburger/Hamburger'
import MobileNavBar from '@/components/common/nav/mobile/NavBar'
import PcNavBar from '@/components/common/nav/pc/NavBar'

const Nav = () => {
  return (
    <aside className="h-full">
      <nav className="hidden lg:block">
        <PcNavBar />
      </nav>
      <nav className="block lg:hidden">
        <MobileNavBar />
      </nav>
      <div className="block lg:hidden">
        <Hamburger />
      </div>
    </aside>
  )
}

export default Nav
