import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { ProgressCircle } from '@tremor/react'

export default function Finish({
  score,
  advice,
}: {
  score: number
  advice: string
}) {
  if (isNaN(score)) {
    score = 0
  }

  return (
    <div className="text-character">
      <div className="border rounded-md p-2 flex gap-2 items-center">
        <InformationCircleIcon className="w-6 h-6 text-primary" />
        <p>模擬面接が終了しました。結果を表示します。</p>
      </div>
      <div className="border rounded-md p-2 flex flex-col lg:flex-row gap-7 mt-3">
        <ProgressCircle value={score} radius={50} strokeWidth={7}>
          <p className="text-2xl text-character font-semibold">{score}</p>
        </ProgressCircle>
        <p className="text-primary text-base">{advice}</p>
      </div>
    </div>
  )
}
