'use client'

import { useIsPcStore } from '@/store/common/isPcStore'

export default function DashboardCalendar() {
  const isPc = useIsPcStore((state) => state.isPc)

  return (
    <section className="mb-2 border rounded-md bg-card">
      {isPc ? (
        <div className="h-32">
          <p>pc calendar</p>
        </div>
      ) : (
        <div className="min-h-[100px]">
          <p>mobile calendar</p>
        </div>
      )}
    </section>
  )
}
