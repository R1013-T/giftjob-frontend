import Image from 'next/image'

import SignInButton from '@/components/auth/SignInButton'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full border-b flex justify-between items-center">
      <h1 className="ml-2">
        <Image src="/giftjob_logo.png" alt="GiftJob" width={130} height={100} />
      </h1>
      <div className="m-2">
        <SignInButton />
      </div>
    </header>
  )
}
