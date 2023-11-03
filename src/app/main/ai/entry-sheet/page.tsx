'use client'

import { useEffect, useState } from 'react'

import InputDialog from '@/components/main/ai/entrySheet/input/InputDialog'

export default function EntrySheet() {
  const [isOpen, setIsOpen] = useState(true)

  const [userInput, setUserInput] = useState({
    category: '',
    content: '',
  })
  const [result, setResult] = useState('')

  useEffect(() => {
    console.log('entrySheet')
  })

  return (
    <div>
      <div>
        <p>category: {userInput.category}</p>
        <p>content : {userInput.content}</p>
        <p></p>
      </div>
      <InputDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        userInput={userInput}
        setUserInput={setUserInput}
      />
    </div>
  )
}
