'use client'

import { useEffect, useState } from 'react'

import Hamburger from '@/components/common/nav/mobile/hamburger/Hamburger'
import MobileNavBar from '@/components/common/nav/mobile/NavBar'
import PcNavBar from '@/components/common/nav/pc/NavBar'
import { useIsPcStore } from '@/store/common/isPcStore'

const Nav = () => {
  const setIsPc = useIsPcStore((state) => state.setIsPc)
  const isPc = useIsPcStore((state) => state.isPc)

  useEffect(() => {
    setIsPc(window.innerWidth > 900)
    window.addEventListener('resize', () => {
      setIsPc(window.innerWidth > 900)
    })
  })

  return (
    <aside className="h-full">
      <nav>{isPc ? <PcNavBar /> : <MobileNavBar />}</nav>
      {!isPc && <Hamburger />}
    </aside>
  )
}

export default Nav
