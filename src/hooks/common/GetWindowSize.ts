import { useEffect } from 'react'

import { useIsPcStore, useWindowSizeStore } from '@/app/store/common'

export const useGetWindowSize = () => {
  const setWindowSize = useWindowSizeStore((state) => state.setWindowSize)
  const setIsPc = useIsPcStore((state) => state.setIsPc)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })

        if (window.innerWidth > 768) {
          setIsPc(true)
        } else {
          setIsPc(false)
        }
      }

      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    } else {
      return
    }
  }, [])
}
