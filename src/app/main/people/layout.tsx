import ViewController from '@/components/common/controller/ViewController'

export default function PeopleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <ViewController />
      {children}
    </div>
  )
}
