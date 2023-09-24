import Image from 'next/image'

import SignInButton from '@/components/auth/SignInButton'

export default function Header() {
  return (
    <div className='border-b flex justify-between items-center' >
      <div className='ml-2'>
        <Image src='/giftjob.svg' alt='GiftJob' width={130} height={100} />
      </div>
      <div className='m-2'>
        <SignInButton />
      </div>
    </div>
  )
}