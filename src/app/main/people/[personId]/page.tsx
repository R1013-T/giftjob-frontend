'use client'

import DetailController from '@/components/common/controller/DetailController'
import MainContentWrapper from '@/components/main/MainContentWrapper'

export default function PersonDetailCompanyDetail({ params }: { params: { personId: string }
}) {
  return (
    <MainContentWrapper>
      <DetailController />
      <p>Person Detail</p>
      <p>{params.personId}</p>
    </MainContentWrapper>
  )
}