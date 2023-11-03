import Link from 'next/link'

import ComingSoon from '@/components/common/comingSoon/ComingSoon'

export default function DashboardAiSelfAnalysis() {
  return (
    <section className="border relative rounded-md flex flex-wrap items-center justify-center gap-2 h-64 lg:h-auto bg-selfAnalytics bg-center bg-no-repeat bg-cover">
      <div className="w-full px-5 text-center text-character font-medium">
        <p className="text-4xl font-bold text-title mb-2">AI Self Analytics</p>
        <p>
          Uncover your professional potential with AI: insightful self-analysis
          for strategic career planning.
        </p>
      </div>
      <Link
        href="/main/ai/mock-interview"
        className="text-lg font-medium bg-primary px-3.5 py-2 rounded-md text-white tracking-widest"
      >
        Start Now
      </Link>
      <ComingSoon />
    </section>
  )
}
