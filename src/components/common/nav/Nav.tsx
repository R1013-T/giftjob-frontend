'use client'

import { useEffect } from 'react'

import { useIsPcStore, useWindowSizeStore } from '@/app/store/common'
import MobileNavBar from '@/components/common/nav/mobile/NavBar'
import PcNavBar from '@/components/common/nav/pc/NavBar'
import { useGetWindowSize } from '@/hooks/common/GetWindowSize'

const Nav = () => {
  const windowSize = useWindowSizeStore((state) => state.windowSize)
  const isPc = useIsPcStore((state) => state.isPc)
  useGetWindowSize()

  useEffect(() => {
    console.log(windowSize)
    console.log(isPc)
  }, [windowSize])

  return <nav>{isPc ? <PcNavBar /> : <MobileNavBar />}</nav>
}

export default Nav
