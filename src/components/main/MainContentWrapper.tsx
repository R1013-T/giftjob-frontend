import DetailController from '@/components/common/controller/DetailController'
import CompanyModal from '@/components/main/company/modal/CompanyModal'

export default function MainContentWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className="p-3 h-MainContent overflow-y-auto">{children}</article>
  )
}
