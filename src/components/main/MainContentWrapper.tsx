'use client';

import { useIsPcStore } from '@/store/common/isPcStore'

export default function MainContentWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const isPc = useIsPcStore((state) => state.isPc)
  return (
    <article className={`p-3 h-MainContent overflow-y-auto ${!isPc && 'pb-24'}`}>{children}</article>
  )
}
