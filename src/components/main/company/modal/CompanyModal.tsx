'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import CompanyAddModal from '@/components/main/company/modal/add/Add'
import CompanyFilterModal from '@/components/main/company/modal/filter/Filter'
import CompanySortModal from '@/components/main/company/modal/sort/Sort'

export default function CompanyModal() {
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
    <>
      <CompanyAddModal isOpen={openAddModal} setIsOpen={setOpenAddModal} />
      <CompanySortModal isOpen={openSortModal} setIsOpen={setOpenSortModal} />
      <CompanyFilterModal
        isOpen={openFilterModal}
        setIsOpen={setOpenFilterModal}
      />
    </>
  )
}
