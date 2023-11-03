import CompanyModal from '@/components/main/company/modal/CompanyModal'

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <CompanyModal />
      {children}
    </div>
  )
}
