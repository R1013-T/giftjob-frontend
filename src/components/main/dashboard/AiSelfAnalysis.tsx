'use client'

import ComingSoon from '@/components/common/comingSoon/ComingSoon'
import { useIsPcStore } from '@/store/common/isPcStore'

export default function DashboardAiSelfAnalysis() {
  const isPc = useIsPcStore((state) => state.isPc)

  if (!isPc)
    return (
      <section className="w-full relative border rounded-md bg-card h-60">
        <p>mobile pc ai self analytics</p>
        <ComingSoon />
      </section>
    )

  return (
    <section className="border relative rounded-md bg-card">
      <p>pc ai self analytics</p>
      <ComingSoon />
    </section>
  )
}
