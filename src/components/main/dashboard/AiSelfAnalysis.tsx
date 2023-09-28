'use client'

import { useIsPcStore } from '@/store/common/isPcStore'

export default function DashboardAiSelfAnalysis() {
  const isPc = useIsPcStore((state) => state.isPc)

  if (!isPc)
    return (
      <section className="w-full border rounded-md bg-card h-60">
        <p>mobile pc ai self analytics</p>
      </section>
    )

  return (
    <section className="border rounded-md bg-card">
      <p>pc ai self analytics</p>
    </section>
  )
}
