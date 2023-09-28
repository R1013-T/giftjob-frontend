'use client'

import { useIsPcStore } from '@/store/common/isPcStore'

export default function DashboardAiEntrySheetReview() {
  const isPc = useIsPcStore((state) => state.isPc)

  if (!isPc)
    return (
      <section className="w-full border rounded-md bg-card h-60">
        <p>mobile pc ai entry sheet</p>
      </section>
    )

  return (
    <section className="border rounded-md bg-card">
      <p>pc ai entry sheet</p>
    </section>
  )
}
