'use client'

import { useIsPcStore } from '@/store/common/isPcStore'

export default function DashboardCompany() {
  const isPc = useIsPcStore((state) => state.isPc)

  if (!isPc)
    return (
      <section className="w-full border rounded-md bg-card h-60">
        <p>mobile company</p>
      </section>
    )

  return (
    <section className="border rounded-md bg-card col-start-2 row-start-2">
      <p>pc company</p>
    </section>
  )
}
