import Nav from '@/components/common/nav/Nav'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  if (typeof window !== 'undefined') {
    console.log(window.screen.width)
  } else {
    console.log('window is undefined')
  }

  return (
    <div className="flex h-screen">
      <aside className="h-full">
        <Nav />
      </aside>
      <main className="w-full h-full">{children}</main>
    </div>
  )
}
