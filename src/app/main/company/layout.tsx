import CompanyController from '@/components/common/controller/CompanyController'
import MobileControllerWrapper from '@/components/common/controller/mobile/ControllerWrapper'
import MobileDetailHeader from '@/components/common/header/main/MobileDetailHeader'

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
