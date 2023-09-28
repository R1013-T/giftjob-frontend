'use client'

import DashboardAiEntrySheetReview from '@/components/main/dashboard/AiEntrySheetReview'
import DashboardAiSelfAnalysis from '@/components/main/dashboard/AiSelfAnalysis'
import DashboardCalendar from '@/components/main/dashboard/Calendar'
import DashboardCompany from '@/components/main/dashboard/Company'
import DashboardNote from '@/components/main/dashboard/Note'
import { useIsPcStore } from '@/store/common/isPcStore'

export default function Main() {
  const isPc = useIsPcStore((state) => state.isPc)

  return (
    <article className={`w-full p-3 ${isPc ? '' : 'h-full overflow-y-scroll'}`}>
      <DashboardCalendar />
      <div
        className={`w-full gap-2 ${
          isPc
            ? 'h-DashboardContent grid grid-cols-2 grid-rows-2'
            : 'flex flex-wrap'
        }`}
      >
        <DashboardAiSelfAnalysis />
        <DashboardAiEntrySheetReview />
        <DashboardCompany />
        <DashboardNote />
      </div>
    </article>
  )
}
