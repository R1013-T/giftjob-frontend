import Test from '@/components/_test'
import SignInButton from '@/components/auth/SignInButton'
import Header from '@/components/common/header/Header'

export default async function Home() {
  return (
    <main>
      <Header />
      <div className="grid place-items-center h-dvh">
        <h2 className="text-2xl font-bold tracking-widest">AI就活管理アプリ</h2>
        <SignInButton />
        <Test />
      </div>
    </main>
  )
}
