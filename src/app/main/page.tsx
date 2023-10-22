import DashboardAiEntrySheetReview from '@/components/main/dashboard/AiEntrySheetReview'
import DashboardAiMockInterview from '@/components/main/dashboard/AiMockInterview'
import DashboardAiSelfAnalysis from '@/components/main/dashboard/AiSelfAnalysis'
import DashboardCalendar from '@/components/main/dashboard/Calendar'

export default function Main() {
  return (
    <article className="w-full p-3 pb-20 lg:pb-3 overflow-y-auto h-MainContent lg:overflow-y-hidden">
      <DashboardCalendar />
      <div className="lg:h-DashboardContent lg:grid lg:grid-rows-2">
        <div className="lg:grid lg:grid-cols-2">
          <DashboardAiSelfAnalysis />
          <DashboardAiEntrySheetReview />
        </div>
        <DashboardAiMockInterview />
      </div>
    </article>
  )
}
