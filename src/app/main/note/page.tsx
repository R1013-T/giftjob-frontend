'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import ComingSoon from '@/components/common/comingSoon/ComingSoon'
import MainContentWrapper from '@/components/main/MainContentWrapper'
import NoteAddModal from '@/components/main/note/modal/Add'
import NoteFilterModal from '@/components/main/note/modal/Filter'
import NoteSortModal from '@/components/main/note/modal/Sort'

export default function Note() {
  const searchParams = useSearchParams()
  const pageModal = searchParams.get('modal')

  const [openAddModal, setOpenAddModal] = useState(false)
  const [openSortModal, setOpenSortModal] = useState(false)
  const [openFilterModal, setOpenFilterModal] = useState(false)

  useEffect(() => {
    setOpenAddModal(pageModal === 'add')
    setOpenSortModal(pageModal === 'sort')
    setOpenFilterModal(pageModal === 'filter')
  }, [pageModal])

  return (
    <MainContentWrapper>
      <NoteAddModal isOpen={openAddModal} setIsOpen={setOpenAddModal} />
      <NoteSortModal isOpen={openSortModal} setIsOpen={setOpenSortModal} />
      <NoteFilterModal
        isOpen={openFilterModal}
        setIsOpen={setOpenFilterModal}
      />
      <ComingSoon />
    </MainContentWrapper>
  )
}
