import { create } from 'zustand'

type IsPcStore = {
  isPc: boolean

  setIsPc: (isPc: boolean) => void
}

export const useIsPcStore = create<IsPcStore>((set) => ({
  isPc: false,
  setIsPc: (isPc) => set({ isPc }),
}))
