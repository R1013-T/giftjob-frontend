'use client'

import { useSearchParams } from 'next/navigation'

export default function Settings() {
  const searchParams = useSearchParams()
  const pageTab = searchParams.get('tab')

  return (
    <div>
      <h2>Settings</h2>
      <p>pageTab: {pageTab}</p>
    </div>
  )
}
