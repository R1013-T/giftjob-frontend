'use client'

import { useState } from 'react'

import AddPersonConfirm from '@/components/main/people/modal/add/Confirm'
import AddPersonForm from '@/components/main/people/modal/add/Form'
import type { Person } from '@/lib/gql/graphql'

type Props = {
  setIsOpen: (isOpen: boolean) => void
}
export default function AddInner(props: Props) {
  const [addState, setAddState] = useState('form')
  const [inputValues, setInputValues] = useState<Person>()

  return (
    <div className="bg-card border mt-2 p-2 rounded-md max-h-90 overflow-y-scroll hide-scrollbar">
      {addState === 'form' ? (
        <AddPersonForm
          inputValues={inputValues}
          setInputValues={setInputValues}
          setAddState={setAddState}
        />
      ) : (
        <AddPersonConfirm
          inputValues={inputValues}
          setAddState={setAddState}
          setIsOpen={props.setIsOpen}
        />
      )}
    </div>
  )
}
