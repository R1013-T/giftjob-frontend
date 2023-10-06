import DetailController from '@/components/common/controller/DetailController'
import CompanyModal from '@/components/main/company/modal/CompanyModal'

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <DetailController />
      <CompanyModal />
      {children}
    </div>
  )
}
