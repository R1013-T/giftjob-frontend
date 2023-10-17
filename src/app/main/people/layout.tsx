import PeopleModal from '@/components/main/people/modal/PeopleModal'

export default function PeopleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <PeopleModal />
      {children}
    </div>
  )
}
