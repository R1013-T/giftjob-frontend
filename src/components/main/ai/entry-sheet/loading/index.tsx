'use client'

import { ArrowPathIcon, PencilIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

export default function Loading({
  entrySheetState,
  setEntrySheetState,
  inputData,
  setReturnData,
}: {
  entrySheetState: string
  setEntrySheetState: (state: string) => void
  inputData: {
    question: string
    content: string
  }
  setReturnData: (data: {
    result: string
    advice: string
    score: number
  }) => void
}) {
  const [error, setError] = useState('')

  useEffect(() => {
    fetchEntrySheet()
  }, [])

  async function fetchEntrySheet() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_AI_ENDPOINT}/entry-sheet?question=${inputData.question}&content=${inputData.content}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const data = await res.json()

      console.log('data', data)

      setReturnData({
        result: data.content.result,
        advice: data.content.advice,
        score: data.content.score,
      })
      setEntrySheetState('result')
    } catch (error) {
      console.log('error', error)
      setError('Error occurred. Please try again.')
    }
  }

  return (
    <div className="h-full w-full flex flex-col gap-10 justify-center items-center">
      <div
        className={`h-24 aspect-square text-center rounded-full blur-[1px] transition-all ${
          error ? 'loader-error' : 'loader'
        }`}
      >
        <div className="bg-background w-full h-full rounded-full blur-md"></div>
      </div>
      <p
        className={`text-lg font-semibold transition-all ${
          error ? 'text-red-400' : 'load-text'
        }`}
      >
        {error ? error : 'AI is now correcting your entry sheet.'}
      </p>
      <div className="flex gap-2 text-xs h-12">
        {error && (
          <>
            <Button
              variant="outline"
              className="text-character flex gap-1.5 items-center whitespace-nowrap"
              onClick={() => {
                setEntrySheetState('input')
              }}
            >
              <PencilIcon className="w-4 h-4" />
              Edit Input
            </Button>
            <Button
              className="flex gap-1.5 items-center whitespace-nowrap"
              onClick={async () => {
                fetchEntrySheet()
              }}
            >
              <ArrowPathIcon className="w-4 h-4" /> Regenerate
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
