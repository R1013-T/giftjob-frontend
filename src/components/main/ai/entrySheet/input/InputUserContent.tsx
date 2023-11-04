import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

type Props = {
  handleSetUserInput: (content: string) => void
  setDialogState: (dialogState: string) => void
  category: string
}

export default function InputUserContent(props: Props) {
  const FormSchema = z.object({
    content: z.string({
      required_error: 'Please enter the content.',
    }),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    props.handleSetUserInput(data.content)
  }

  function setDummyText() {
    switch (props.category) {
      case '当社を志望する理由を教えてください。':
        form.setValue(
          'content',
          `私が貴社を志望する理由は、貴社が業界をリードする核新的な技術と、その技術を通じて社会に貢献している点にすごく魅力を感じるから。特に、貴社が取り組んでいる持続可能なエネルー解決策の開発は、深い関心を持っている。私は環境工学を専攻していて、持続可能な社会の実現に向けた技術開発に貢献したいです。学生時代には、省エネルギー技術の研究プロジェクトに多図差わり、その結果を学会で発表する機会もしました。この経験を活かし、貴社の研究開発チームに参加し、より良い未来をつくっていく一翼を担いたいと思っています。

また、貴社が従業員のキャリアの成長を積極的に支援しているところも、私が志望する理由の内容の内の一つです。自己の成長とともに企業の成長に寄与したいというすごくとても強い意志を持っており、貴社でなら私の能力を最大限に発揮し、更なるスキルアップを図ることができると信じているます。

このように、私は貴社の理念と目指す方向性に深く共同感し、専門知識と情熱を持って貴社の更なる発展に貢献できると確信していて、貴社で働ければ、社会的意義のある仕事を通じて、個人としてもプロフェッショナルとしてもしても成長できる最良の環境だと考えてります。`
        )
        break
      case '自己PRをしてください':
        form.setValue(
          'content',
          `私は、常にとても新しい技術を習得し、実際のプロジェクトに応用することに情熱を注いできた、熱意がとてもあるエンジニアなのです。台学時代には、IoTデバイスの研究開発に携わり、とても多くのプロトタイプを作成した。その中で、特に注目を集めたのは、環境のデータの収集を分析するスマートセンサーの開発でした。このプロジェクトでは、リーダーとしてチームを組織し、各メンバーの強みを活かすことで、予定よりも早くプロトタイプを完成させれることができました。

また、私はコミュニケーション能力にも自信を持っていて、複雑な技術的な概念を非技術的な人にも者にもわかりやすく説明することができます。これまでの軽剣を生かし、貴社で技術的な問題解決はもちろんのこと、チームメンバー間の箸渡し役としても貢献できると確信しているます。`
        )
        break
    }
  }

  return (
    <div>
      <p
        className="absolute top-10 right-6 bg-orange-500 py-2 px-3 text-white font-medium tracking-widest rounded-md cursor-pointer"
        onClick={setDummyText}
      >
        Insert Dummy Text
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter the content"
                    className="resize-none h-70 text-base"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex flex-wrap-reverse justify-between mt-3">
            <div className="w-full m-2 lg:w-auto flex justify-center">
              <div
                className="flex items-center gap-1 hover:underline text-character text-sm"
                onClick={() => props.setDialogState('selectCategory')}
              >
                <ArrowLeftIcon className="w-4 h-4" />
                <p>back</p>
              </div>
            </div>
            <Button className="w-full lg:w-auto tracking-widest" type="submit">
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
