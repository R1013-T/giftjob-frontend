import DetailController from '@/components/common/controller/DetailController'
import MainContentWrapper from '@/components/main/MainContentWrapper'

export default function CompanyDetail({
  params,
}: {
  params: { companyId: string }
}) {
  return (
    <MainContentWrapper>
      <DetailController />
      <h1>Company Detail</h1>
      <p>Company ID: {params.companyId}</p>
    </MainContentWrapper>
  )
}
