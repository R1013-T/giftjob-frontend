'use client'

import { useRef, useState } from 'react'

import FirstSettings from '@/components/main/ai/mock-interview/first-settings'
import Assistant from '@/components/main/ai/mock-interview/message-block/assistant'
import Info from '@/components/main/ai/mock-interview/message-block/info'
import UserInput from '@/components/main/ai/mock-interview/message-block/input'
import { User } from '@/components/main/ai/mock-interview/message-block/user'

type Message = {
  role: 'user' | 'assistant' | 'system'
  content: string
  icon?: string
}

export default function MockInterview() {
  const [firstSettings, setFirstSettings] = useState({
    occupation: '',
    times: 0,
  })
  const [loading, setLoading] = useState('')
  const [questionCount, setQuestionCount] = useState(0)
  const [messages, setMessages] = useState<Message[]>([])
  const [advice, setAdvice] = useState('')
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  async function handleStart(occupation: string, times: number) {
    setLoading('質問を生成中です。')

    let firstMessage: Message = {
      role: 'system',
      content: `これから就職活動における、面接を行ってください。職業は、${occupation}です。まず、最初の挨拶と、質問をしてください。`,
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_AI_ENDPOINT}/mock-interview?occupation=${occupation}&isFirst=true`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: [],
            question: [],
            previous_messages: [firstMessage],
          }),
        }
      )
      const data = await res.json()

      setQuestionCount(1)
      setMessages([
        firstMessage,
        {
          role: 'assistant',
          content: data.content.res.greeting || '',
        },
        {
          role: 'assistant',
          content: data.content.res.question || '質問を生成出来ませんでした。',
        },
      ])

      console.log('data', data)
    } catch (error) {
      console.log('error', error)
    }

    setLoading('')
  }

  function test() {
    console.log('test')
    console.log('firstSettings', firstSettings)
    console.log('messages', messages)
    console.log('advice', advice)
    console.log('score', score)

    console.log('questionCount', questionCount)
  }

  async function fetchMockInterview(currentMessage: string) {
    let isLast = false
    let isEnd = false
    let count = questionCount

    console.log('questionCount', questionCount)
    console.log('count', count)

    setMessages([
      ...messages,
      {
        role: 'user',
        content: currentMessage,
      },
    ])
    setLoading('質問を生成中です。')

    if (count + 1 === firstSettings.times) {
      console.log('last')
      isLast = true
    } else if (count >= firstSettings.times) {
      console.log('end')
      isEnd = true
    } else {
      console.log('continue')
      console.log('questionCount', questionCount)
      console.log('count', count)
      console.log('firstSettings.times', firstSettings.times)
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_AI_ENDPOINT}/mock-interview?occupation=${
          firstSettings.occupation
        }${isLast ? '&isLast=true' : ''}${isEnd ? '&isEnd=true' : ''}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: [],
            question: [],
            previous_messages: [
              ...messages,
              { role: 'user', content: currentMessage },
            ],
          }),
        }
      )
      const data = await res.json()

      setQuestionCount(count + 1)
      setLoading('')

      const newMessages: Message[] = [
        {
          role: 'user',
          content: currentMessage,
        },
      ]

      if (data.content.res.greeting) {
        newMessages.push({
          role: 'assistant',
          content: data.content.res.greeting,
        })
      }
      if (data.content.res.question) {
        newMessages.push({
          role: 'assistant',
          content: data.content.res.question,
        })
      }
      if (data.content.res.advice) {
        setAdvice(data.content.res.advice)
        setFinished(true)
      }
      if (data.content.res.score) {
        setScore(data.content.res.score)
        setFinished(true)
      }

      setMessages([...messages, ...newMessages])

      console.log('data', data)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className="h-full w-full relative">
      <FirstSettings
        setFirstSettings={setFirstSettings}
        handleStart={handleStart}
      />

      <div
        className=""
        onClick={() => {
          test()
        }}
      >
        test
      </div>

      <div className="h-full w-full overflow-y-auto text-character pb-44 text-sm px-1 flex flex-col gap-2">
        {firstSettings.occupation && (
          <Info
            text={`職業「${firstSettings.occupation}」、回数「${firstSettings.times}回」で、面接を開始します。`}
            icon="info"
          />
        )}
        {messages.map((message, index) => {
          if (message.role === 'system') {
            return null
          } else if (message.role === 'assistant') {
            return <Assistant key={index} text={message.content} />
          } else {
            return <User key={index} text={message.content} />
          }
        })}
        {loading && <Info text={loading} icon="loading" />}
        <div className="border border-red-400">
          <p>score: {score}</p>
          <p>advice: {advice}</p>
        </div>
      </div>

      {loading || finished ? (
        ''
      ) : (
        <UserInput fetchMockInterview={fetchMockInterview} />
      )}
    </div>
  )
}
