import MainHeader from '@/components/common/header/main/MainHeader'
import Nav from '@/components/common/nav/Nav'
import { NextAuthProvider } from '@/utils/NextAuthProvider'

export default function MainLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <NextAuthProvider>
      <div className='flex w-full h-dvh overflow-hidden'>
        <Nav />
        <div className='w-full' >
          <MainHeader />
          <main className='w-full h-full'>{children}</main>
        </div>
      </div>
    </NextAuthProvider>
  )
}
