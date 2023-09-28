'use client'

import { useIsPcStore } from '@/store/common/isPcStore'

export default function DashboardNote() {
  const isPc = useIsPcStore((state) => state.isPc)

  if (!isPc)
    return (
      <section className="w-full border rounded-md bg-card h-60 mb-32">
        <p>mobile note</p>
      </section>
    )

  return (
    <section className="border rounded-md bg-card col-start-1 row-start-2">
      <p>pc note</p>
    </section>
  )
}
