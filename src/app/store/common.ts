import { create } from 'zustand'

type WindowSize = {
  width: number
  height: number
}

type WindowSizeStore = {
  windowSize: WindowSize
  setWindowSize: (windowSize: WindowSize) => void
}

export const useWindowSizeStore = create<WindowSizeStore>((set) => ({
  windowSize: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  setWindowSize: (windowSize) => set({ windowSize }),
}))

type IsPcStore = {
  isPc: boolean
  setIsPc: (isPc: boolean) => void
}

export const useIsPcStore = create<IsPcStore>((set) => ({
  isPc: true,
  setIsPc: (isPc) => set({ isPc }),
}))
