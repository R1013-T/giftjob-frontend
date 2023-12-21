'use client'

import { ArrowPathIcon, PencilIcon } from '@heroicons/react/24/outline'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

export default function EntrySheetResult({
  setEntrySheetState,
  inputData,
  returnData,
}: {
  setEntrySheetState: (state: string) => void
  inputData: { question: string; content: string }
  returnData: { result: string; advice: string; score: number }
}) {
  return (
    <div className="h-full pb-20 overflow-y-auto">
      {/* <p>{inputData.content}</p>
      <p>{returnData.result}</p>
      <p>{returnData.advice}</p>
      <p>{returnData.score}</p> */}
      <Accordion
        type="multiple"
        className="w-full px-1 text-title"
        defaultValue={['question', 'score', 'result']}
      >
        <AccordionItem value="question">
          <AccordionTrigger className="text-sm text-character font-normal">
            Question
          </AccordionTrigger>
          <AccordionContent>
            <p className="py-1 px-2 rounded-md border text-base">
              {inputData.question}
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="score">
          <AccordionTrigger className="text-sm text-character font-normal">
            Score
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-2 w-full">
              <div className="bg-red-200 h-36 aspect-square flex justify-center items-center">
                {returnData.score}
              </div>
              <div className="w-full h-36 overflow-y-auto">
                <p className="text-primary">AI Advice</p>
                <p className="text-character mt-1">{returnData.advice}</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="input">
          <AccordionTrigger className="text-sm text-character font-normal">
            Your Input
          </AccordionTrigger>
          <AccordionContent>
            <p className="py-1 px-2 rounded-md border text-base">
              {inputData.content}
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="result">
          <AccordionTrigger className="text-sm text-primary font-normal">
            AI Result
          </AccordionTrigger>
          <AccordionContent className="">
            <div className="max-h-[40vh] overflow-y-auto">
              <p className="py-1 px-2 rounded-md border text-base">
                {inputData.content}
                {/* {returnData.result} */}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="absolute right-5 bottom-3 mt-3 flex gap-3">
        <Button
          variant="outline"
          className="text-character flex gap-1.5 items-center whitespace-nowrap shadow"
          onClick={() => {
            setEntrySheetState('input')
          }}
        >
          <PencilIcon className="w-5 h-5" />
          Edit Input
        </Button>
        <Button
          className="flex gap-1.5 items-center whitespace-nowrap shadow"
          onClick={() => {
            setEntrySheetState('loading')
          }}
        >
          <ArrowPathIcon className="w-5 h-5" /> Regenerate
        </Button>
      </div>
    </div>
  )
}
