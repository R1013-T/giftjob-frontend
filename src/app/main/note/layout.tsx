import ViewController from '@/components/common/controller/ViewController'

export default function NoteLayout({
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
