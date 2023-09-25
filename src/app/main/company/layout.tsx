import CompanyController from '@/components/common/controller/CompanyController'
import MobileControllerWrapper from '@/components/common/controller/mobile/ControllerWrapper'

export default function CompanyLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div>
      <CompanyController />
      {children}
    </div>
  )
}
