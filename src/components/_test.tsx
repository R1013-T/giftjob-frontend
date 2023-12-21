'use client'

import { Button } from './ui/button'

export default function Test() {
  const question = '当社を志望する理由を教えてください。'

  const content =
    '私が貴社を志望する理由は、貴社が業界をリードする核新的な技術と、その技術を通じて社会に貢献している点にすごく魅力を感じるから。特に、貴社が取り組んでいる持続可能なエネルー解決策の開発は、深い関心を持っている。私は環境工学を専攻していて、持続可能な社会の実現に向けた技術開発に貢献したいです。学生時代には、省エネルギー技術の研究プロジェクトに多図差わり、その結果を学会で発表する機会もしました。この経験を活かし、貴社の研究開発チームに参加し、より良い未来をつくっていく一翼を担いたいと思っています。また、貴社が従業員のキャリアの成長を積極的に支援しているところも、私が志望する理由の内容の内の一つです。自己の成長とともに企業の成長に寄与したいというすごくとても強い意志を持っており、貴社でなら私の能力を最大限に発揮し、更なるスキルアップを図ることができると信じているます。このように、私は貴社の理念と目指す方向性に深く共同感し、専門知識と情熱を持って貴社の更なる発展に貢献できると確信していて、貴社で働ければ、社会的意義のある仕事を通じて、個人としてもプロフェッショナルとしてもしても成長できる最良の環境だと考えてります。'

  return (
    <>
      <Button
        onClick={async () => {
          console.log('==== START ====')

          const res = await fetch(
            `${process.env.NEXT_PUBLIC_AI_ENDPOINT}?question=${question}&content=${content}`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )

          const data = await res.json()
          console.log(data)
        }}
      >
        test
      </Button>
    </>
  )
}
