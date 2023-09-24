import Link from 'next/link'

import SignOutButton from '@/components/auth/SignOutButton'
import Header from '@/components/common/header/Header'

export default async function Home() {
  return (
    <main>
      <Header />
      <Link className="m-10" href="./main">
        link
      </Link>
      <SignOutButton />
    </main>
  )
}
