import Nav from '@/components/common/nav/Nav'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="flex h-screen">
      <aside className="h-full">
        <Nav />
      </aside>
      <main className="w-full h-full">{children}</main>
    </div>
  )
}
