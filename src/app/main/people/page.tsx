'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import PeopleAddModal from '@/components/main/people/modal/Add'
import PeopleFilterModal from '@/components/main/people/modal/Filter'
import PeopleSortModal from '@/components/main/people/modal/Sort'

export default function People() {
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
      <PeopleAddModal isOpen={openAddModal} setIsOpen={setOpenAddModal} />
      <PeopleSortModal isOpen={openSortModal} setIsOpen={setOpenSortModal} />
      <PeopleFilterModal
        isOpen={openFilterModal}
        setIsOpen={setOpenFilterModal}
      />
    </article>
  )
}
