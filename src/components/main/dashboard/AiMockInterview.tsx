import { SparklesIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import ComingSoon from '@/components/common/comingSoon/ComingSoon'

export default function DashboardAiMockInterview() {
  return (
    <section className="border relative rounded-md flex flex-wrap items-center justify-center gap-2 h-64 lg:h-auto bg-mockInterview bg-center bg-no-repeat bg-cover">
      <div className="w-full px-5 text-center text-character font-medium">
        <p className="text-4xl font-bold text-title mb-2">AI Mock Interview</p>
        {/* <p>
          Master the interview game with AI: practice, perfect, and perform with
          our mock interview simulator.
        </p> */}
      </div>
      <Link
        href="/main/ai/mock-interview"
        className="text-lg font-medium bg-primary px-3.5 py-2 rounded-md text-white tracking-widest flex items-center justify-center gap-1.5"
      >
        <SparklesIcon className="w-5 h-5" /> Start Now
      </Link>
      {/* <ComingSoon /> */}
    </section>
  )
}
