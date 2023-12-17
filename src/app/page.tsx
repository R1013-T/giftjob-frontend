import Test from '@/components/_test'
import SignInButton from '@/components/auth/SignInButton'
import Header from '@/components/common/header/Header'
import { Button } from '@/components/ui/button'

export default async function Home() {
  return (
    <main>
      <Header />
      <div className="grid place-items-center h-dvh">
        <SignInButton />

        <Test />
      </div>
    </main>
  )
}
