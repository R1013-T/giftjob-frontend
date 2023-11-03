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
  const [content, setContent] = useState('')

  useEffect(() => {
    if (!category || !content) return

    props.setUserInput({
      category,
      content,
    })

    props.setIsOpen(false)
  }, [content])

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
                setDialogState={setDialogState}
                setContent={setContent}
              />
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  )
}
