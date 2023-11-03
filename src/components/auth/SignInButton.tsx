'use client'

import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { LoaderIcon } from 'lucide-react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type OAuthButtonProps = {
  provider: string
  name: string
}

export default function SignInButton() {
  const [loading, setLoading] = useState(false)
  const [currentProvider, setCurrentProvider] = useState('')

  const OAuthButton = (props: OAuthButtonProps) => {
    return (
      <Button
        className="w-full relative mx-auto mt-3 px-3 bg-card text-character border h-12 rounded-md flex justify-between hover:bg-card hover:border-primary"
        onClick={() => {
          if (loading) return
          setLoading(true)
          setCurrentProvider(props.provider)
          signIn(props.provider, { callbackUrl: '/main' })
        }}
      >
        {loading && (
          <div className="bg-gray-500/90 absolute top-0 left-0 z-50 w-full h-full rounded-md grid place-items-center">
            {currentProvider === props.provider && <LoaderIcon className='animate-spin text-white' />}
          </div>
        )}
        <Image
          src={`/OAuth/${props.provider}.png`}
          alt=""
          width={25}
          height={25}
        />
        <p>
          Continue with{' '}
          <span className="text-title font-bold">{props.name}</span>
        </p>
        <ArrowRightIcon className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger className="bg-primary text-white px-3 py-2 tracking-wide rounded-md text-sm">
          Get Started
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <p className="mb-1 ml-2 text-center">Get started to GiftJob</p>
            </DialogTitle>
            <DialogDescription>
              <OAuthButton provider={'azure-ad'} name={'Microsoft'} />
              <OAuthButton provider={'google'} name={'Google'} />
              <OAuthButton provider={'github'} name={'GitHub'} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
