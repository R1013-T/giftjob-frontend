'use client'

import { useState } from 'react'

import Confirm from '@/components/main/company/modal/modalContent/add/Confirm'
import InputFields from '@/components/main/company/modal/modalContent/add/InputFields'
import SelectTemplate from '@/components/main/company/modal/modalContent/add/SelectTemplate'
import type { CompanyDefaultInfo } from '@/types/company'

type Props = {
  setIsOpen: (isOpen: boolean) => void
}

export default function AddInner(props: Props) {
  const [addState, setAddState] = useState('selectTemplate')
  const [templateId, setTemplateId] = useState('')
  const [defaultCompanyInfo, setDefaultCompanyInfo] = useState<
    CompanyDefaultInfo | undefined
  >()

  return (
    <div className="bg-card border mt-2 p-2 rounded-md max-h-90 overflow-y-scroll hide-scrollbar">
      {addState === 'selectTemplate' && (
        <SelectTemplate
          setAddState={setAddState}
          setTemplateId={setTemplateId}
        />
      )}
      {addState === 'inputFields' && (
        <InputFields
          setAddState={setAddState}
          defaultCompanyInfo={defaultCompanyInfo}
          setDefaultCompanyInfo={setDefaultCompanyInfo}
        />
      )}
      {addState === 'confirm' && (
        <Confirm
          setAddState={setAddState}
          defaultCompanyInfo={defaultCompanyInfo as CompanyDefaultInfo}
          setIsOpen={props.setIsOpen}
        />
      )}
    </div>
  )
}
