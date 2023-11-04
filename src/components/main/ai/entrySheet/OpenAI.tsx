'use client'

import { AzureKeyCredential, OpenAIClient } from '@azure/openai'
import { useEffect, useState } from 'react'

import { EntrySheetPrompt } from '@/lib/prompt'

type Props = {
  userInput: {
    category: string
    content: string
  }
}

export default function OpenAIEntrySheet(props: Props) {
  let { category, content } = props.userInput

  const [resultMessage, setResultMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!category || !content) return
    if (resultMessage) return
    handleOpenAI()
  })

  const handleOpenAI = async () => {
    setLoading(true)

    const endpoint = process.env.NEXT_PUBLIC_AZURE_OPENAI_ENDPOINT!
    const apiKey = process.env.NEXT_PUBLIC_AZURE_OPENAI_API_KEY!

    const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey))

    const messages = [
      { role: 'system', content: EntrySheetPrompt() },
      {
        role: 'user',
        content: `エントリーシートの質問「${category}」、ユーザーの回答「${content}」`,
      },
    ]

    const deploymentId = process.env.NEXT_PUBLIC_AZURE_OPENAI_DEPLOYMENT_NAME!

    setResultMessage('')

    await client
      .getChatCompletions(deploymentId, messages)
      .then((result) => {
        for (const choice of result.choices) {
          setResultMessage(choice.message?.content || '')
        }
        setLoading(false)
      })
      .catch((err) => {
        // TODO
      })
  }

  return (
    <div className="text-title">
      <div>
        <span className="text-sm text-character">Question</span>
        <p className="w-full border rounded-md text-character p-2 bg-card">
          {category}
        </p>
      </div>
      <div className="whitespace-pre-wrap mt-3 flex flex-col lg:flex-row gap-8 transition-all lg:gap-2 h-[calc(100dvh-200px)] lg:h-[calc(100dvh-170px)]">
        <div className="h-1/2 lg:h-full lg:w-1/2">
          <p className="text-sm text-character">Your Input</p>
          <div className="h-full w-full border font-medium text-lg tracking-wide rounded-md p-2 bg-card overflow-y-auto">
            <p className="leading-relaxed">{content}</p>
          </div>
        </div>
        <div className="text-primary h-1/2 lg:h-full lg:w-1/2">
          <p className="text-sm">AI Response</p>
          <div
            className={`h-full w-full border font-medium text-lg tracking-wide rounded-md p-2 bg-card overflow-y-auto ${
              loading && 'bg-gray-200'
            }`}
          >
            {loading ? (
              <div className="h-full w-full flex flex-wrap justify-center items-center">
                <div>
                  <div className="flex flex-row gap-10">
                    <div className="w-4 h-4 rounded-full bg-primary animate-ping"></div>
                    <div className="w-4 h-4 rounded-full bg-primary animate-ping [animation-delay:+.3s]"></div>
                    <div className="w-4 h-4 rounded-full bg-primary animate-ping [animation-delay:+.5s]"></div>
                  </div>
                  <p className="w-full text-center mt-8 text-xl tracking-wider">
                    Loading...
                  </p>
                </div>
              </div>
            ) : (
              <p className="leading-relaxed">{resultMessage}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
