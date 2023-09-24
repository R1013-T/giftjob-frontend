'use client'

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

const OAuthButton = (props:OAuthButtonProps) => {
  return (
    <Button
      className='w-3/4 mx-auto bg-card text-character border flex justify-between items-center h-12 rounded-md hover:bg-card hover:border-primary'
      onClick={() => signIn(props.provider, { callbackUrl: '/main' })}
    >
      <Image src={`/OAuth/${props.provider}.png`} alt="" width={25} height={25} />
      <p>Continue with <span className='text-title font-bold' >{props.name}</span></p>
      <div></div>
    </Button>
  )
}

export default function SignInButton() {

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Get Started</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <p className='mb-4' >Get started to GiftJob</p>
          </DialogTitle>
          <DialogDescription className='flex flex-col gap-3' >
            <OAuthButton provider="google" name="Google" />
            <OAuthButton provider="github" name="GitHub" />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}