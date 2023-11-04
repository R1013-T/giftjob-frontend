'use client'

import { useEffect, useState } from 'react'

import InputDialog from '@/components/main/ai/entrySheet/input/InputDialog'
import OpenAIEntrySheet from '@/components/main/ai/entrySheet/OpenAI'
import ReGenerateButton from '@/components/main/ai/entrySheet/ReGenerateButton'

export default function EntrySheet() {
  const [isOpen, setIsOpen] = useState(true)

  const [userInput, setUserInput] = useState({
    category: '',
    content: '',
  })

  return (
    <div>
      <ReGenerateButton
        onClick={() => {
          setIsOpen(true)
          setUserInput({
            category: '',
            content: '',
          })
        }}
      />
      {userInput.category && userInput.content && (
        <OpenAIEntrySheet userInput={userInput} />
      )}
      <InputDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        userInput={userInput}
        setUserInput={setUserInput}
      />
    </div>
  )
}
