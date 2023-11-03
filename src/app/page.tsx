import SignInButton from '@/components/auth/SignInButton'
import Header from '@/components/common/header/Header'

export default async function Home() {
  return (
    <main>
      <Header />
      <div className="grid place-items-center h-dvh">
        <SignInButton />
      </div>
    </main>
  )
}
