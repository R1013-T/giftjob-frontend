'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

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
    <article>
      <h1>Note</h1>
      <NoteAddModal isOpen={openAddModal} setIsOpen={setOpenAddModal} />
      <NoteSortModal isOpen={openSortModal} setIsOpen={setOpenSortModal} />
      <NoteFilterModal
        isOpen={openFilterModal}
        setIsOpen={setOpenFilterModal}
      />
    </article>
  )
}
