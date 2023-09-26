import Nav from '@/components/common/nav/Nav'
import { NextAuthProvider } from '@/utils/NextAuthProvider'

export default function MainLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <NextAuthProvider>
      <div className='flex h-dvh overflow-hidden'>
        <Nav />
        <main className='w-full h-full'>{children}</main>
      </div>
    </NextAuthProvider>
  )
}
