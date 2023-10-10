'use client'

import ComingSoon from '@/components/common/comingSoon/ComingSoon'
import { useIsPcStore } from '@/store/common/isPcStore'

export default function DashboardAiEntrySheetReview() {
  const isPc = useIsPcStore((state) => state.isPc)

  if (!isPc)
    return (
      <section className="w-full relative border rounded-md bg-card h-60">
        <ComingSoon />
        <p>mobile pc ai entry sheet</p>
      </section>
    )

  return (
    <section className="border relative rounded-md bg-card">
      <ComingSoon />
      <p>pc ai entry sheet</p>
    </section>
  )
}
