'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import CompanyDetailEditModal from '@/components/main/company/modal/detail/edit/Edit'
import CompanyDetailTrashModal from '@/components/main/company/modal/detail/trash/Trash'

type Props = {
  trashName: string
  trashAction: () => void
}

export default function CompanyDetailModal(props: Props) {
  const searchParams = useSearchParams()
  const pageModal = searchParams.get('modal')

  const [openEditModal, setOpenEditModal] = useState(false)
  const [openTrashModal, setOpenTrashModal] = useState(false)

  useEffect(() => {
    setOpenEditModal(pageModal === 'edit')
    setOpenTrashModal(pageModal === 'trash')
  }, [pageModal])

  return (
    <>
      <CompanyDetailTrashModal
        trashName={props.trashName}
        trashAction={() => props.trashAction()}
        isOpen={openTrashModal}
        setIsOpen={setOpenTrashModal}
      />
      <CompanyDetailEditModal
        isOpen={openEditModal}
        setIsOpen={setOpenEditModal}
      />
    </>
  )
}
