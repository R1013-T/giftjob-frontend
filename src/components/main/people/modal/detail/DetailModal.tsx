'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import CompanyDetailEditModal from '@/components/main/company/modal/detail/edit/Edit'
import CompanyDetailTrashModal from '@/components/main/company/modal/detail/trash/Trash'
import PersonEditModal from '@/components/main/people/modal/detail/edit/Edit'

type Props = {
  trashName: string
  trashAction: () => void
}

export default function PersonDetailModal(props: Props) {
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
      <PersonEditModal isOpen={openEditModal} setIsOpen={setOpenEditModal} />
    </>
  )
}
