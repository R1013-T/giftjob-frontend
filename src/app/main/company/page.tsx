'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import CrudTest from '@/components/main/company/CrudTest'
import CompanyAddModal from '@/components/main/company/modal/Add'
import CompanyFilterModal from '@/components/main/company/modal/Filter'
import CompanySortModal from '@/components/main/company/modal/Sort'

export default function Company() {
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
      <h1>Company</h1>
      <CrudTest />

      <CompanyAddModal isOpen={openAddModal} setIsOpen={setOpenAddModal} />
      <CompanySortModal isOpen={openSortModal} setIsOpen={setOpenSortModal} />
      <CompanyFilterModal
        isOpen={openFilterModal}
        setIsOpen={setOpenFilterModal}
      />
    </article>
  )
}
