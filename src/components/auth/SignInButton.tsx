'use client'

import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

type OAuthButtonProps = {
  provider: string
  name: string
}

const OAuthButton = (props: OAuthButtonProps) => {
  return (
    <Button
      className='w-full relative mx-auto mt-3 px-3 bg-card text-character border h-12 rounded-md flex justify-between hover:bg-card hover:border-primary'
      onClick={() => signIn(props.provider, { callbackUrl: '/main' })}
    >
      <Image
        src={`/OAuth/${props.provider}.png`}
        alt=''
        width={25}
        height={25}
      />
      <p>
        Continue with <span className='text-title font-bold'>{props.name}</span>
      </p>
      <ArrowRightIcon className='h-6 w-6' />
    </Button>
  )
}

export default function SignInButton() {
  return (
    <Dialog>
      <DialogTrigger className='bg-primary text-white px-3 py-2 tracking-wide rounded-md text-sm'>
        Get Started
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <p className='mb-1 ml-2 text-center'>Get started to GiftJob</p>
          </DialogTitle>
          <DialogDescription>
              <OAuthButton provider={'microsoft'} name={'Microsoft'} />
              <OAuthButton provider={'google'} name={'Google'} />
              <OAuthButton provider={'github'} name={'GitHub'} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
