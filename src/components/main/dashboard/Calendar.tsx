import ComingSoon from '@/components/common/comingSoon/ComingSoon'

export default function DashboardCalendar() {
  return (
    <section className="relative mb-2 border rounded-md bg-card">
      <ComingSoon />
      <div className="h-52 lg:h-32">
        <p>Calendar Event</p>
      </div>
    </section>
  )
}
