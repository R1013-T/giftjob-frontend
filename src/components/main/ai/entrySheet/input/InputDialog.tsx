import React, { useEffect, useState } from 'react'

import BackButton from '@/components/common/button/BackButton'
import InputUserContent from '@/components/main/ai/entrySheet/input/InputUserContent'
import SelectCategory from '@/components/main/ai/entrySheet/input/SelectCategory'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  userInput: {
    category: string
    content: string
  }
  setUserInput: (userInput: { category: string; content: string }) => void
}

export default function InputDialog(props: Props) {
  const [dialogState, setDialogState] = React.useState('selectCategory')

  const [category, setCategory] = useState('')

  function handleSetUserInput(content: string) {
    console.log('category', category)
    console.log('content', content)

    props.setUserInput({
      category,
      content,
    })

    setDialogState('selectCategory')
    setCategory('')

    props.setIsOpen(false)
  }

  return (
    <AlertDialog open={props.isOpen} onOpenChange={props.setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>AI Entry Sheet Review</AlertDialogTitle>
          <AlertDialogDescription>
            {dialogState === 'selectCategory' && (
              <SelectCategory
                setDialogState={setDialogState}
                setCategory={setCategory}
              />
            )}
            {dialogState === 'inputUserContent' && (
              <InputUserContent
                handleSetUserInput={handleSetUserInput}
                setDialogState={setDialogState}
                category={category}
              />
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  )
}
