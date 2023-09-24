'use client'

import { signIn } from 'next-auth/react'

import { Button } from '@/components/ui/button'

export default function SignInButton() {
  const handleSignIn = () => {
    signIn()
  }

  return (
    <Button onClick={handleSignIn} >Sign In</Button>
  )
}