import DetailController from '@/components/common/controller/DetailController'

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <DetailController />
      {children}
    </div>
  )
}
