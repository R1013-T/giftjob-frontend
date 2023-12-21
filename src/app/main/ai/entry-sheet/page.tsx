'use client'

import { useEffect, useState } from 'react'

import EntrySheetInput from '@/components/main/ai/entry-sheet/input'
import Loading from '@/components/main/ai/entry-sheet/loading'
import EntrySheetResult from '@/components/main/ai/entry-sheet/result'

export default function EntrySheet() {
  const [entrySheetState, setEntrySheetState] = useState('input')
  const [inputData, setInputData] = useState({
    question: '',
    content: '',
  })
  const [returnData, setReturnData] = useState({
    result: '',
    advice: '',
    score: 0,
  })

  useEffect(() => {
    console.log('inputData', inputData)
    console.log('entrySheetState', entrySheetState)
  }, [inputData, entrySheetState])

  return (
    <div className="h-full w-full relative overflow-y-auto">
      {entrySheetState === 'input' && (
        <EntrySheetInput
          setEntrySheetState={setEntrySheetState}
          inputData={inputData}
          setInputData={setInputData}
        />
      )}
      {entrySheetState === 'loading' && (
        <Loading
          entrySheetState={entrySheetState}
          setEntrySheetState={setEntrySheetState}
          inputData={inputData}
          setReturnData={setReturnData}
        />
      )}
      {entrySheetState === 'result' && (
        <EntrySheetResult
          setEntrySheetState={setEntrySheetState}
          inputData={inputData}
          returnData={returnData}
        />
      )}
    </div>
  )
}
