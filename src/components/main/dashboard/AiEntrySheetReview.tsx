import { SparklesIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function DashboardAiEntrySheetReview() {
  return (
    <section className="border relative rounded-md flex flex-wrap items-center justify-center gap-2 h-64 lg:h-auto bg-entrySheet bg-center bg-no-repeat bg-cover">
      <div className="w-full px-5 text-center text-character font-medium">
        <p className="text-4xl font-bold text-title mb-2">
          AI Entry Sheet Review
        </p>
        {/* <p>
          Transform your entry sheet with AI precision: impeccable grammar,
          impactful phrasing, and alignment with your career aspirations.
        </p> */}
      </div>
      <Link
        href="/main/ai/entry-sheet"
        className="text-lg font-medium bg-primary px-3.5 py-2 rounded-md text-white tracking-widest flex items-center justify-center gap-1.5"
      >
        <SparklesIcon className="w-5 h-5" /> Start Now
      </Link>
    </section>
  )
}
