import { useRouter } from 'next/navigation'
import { useState } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function FirstSettings({
  setFirstSettings,
  handleStart,
}: {
  setFirstSettings: (firstSettings: {
    occupation: string
    times: number
  }) => void
  handleStart: (occupation: string, times: number) => void
}) {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(true)

  const [occupation, setOccupation] = useState('')
  const [times, setTimes] = useState(1)

  function handleSettings() {
    if (occupation === '' || times <= 0) return

    setFirstSettings({ occupation, times })
    setIsOpen(false)
    handleStart(occupation, times)
  }

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>AI Mock Interview</AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-2">
            <Label>Occupation</Label>
            <Input
              value={occupation}
              placeholder="e.g. Software Engineer"
              onChange={(e) => setOccupation(e.target.value)}
              className="text-title"
            />
            <Label>Number of questions</Label>
            <Input
              type="number"
              value={times}
              className="text-title"
              onChange={(e) => setTimes(Number(e.target.value))}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => router.push('/main')}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className={`${
              occupation === '' &&
              'cursor-not-allowed bg-primary/50 hover:bg-primary/50'
            }${
              times <= 0 &&
              'cursor-not-allowed bg-primary/50 hover:bg-primary/50'
            }`}
            onClick={() => {
              handleSettings()
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
