'use client'

import { signOut } from 'next-auth/react'

import { Button } from '@/components/ui/button'

export default function SignOutButton() {
  const handleSignIn = () => {
    signOut()
  }

  return (
    <Button onClick={handleSignIn} >Sign Out</Button>
  )
}