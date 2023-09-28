'use client'

import { ApolloProvider } from '@apollo/client'

import MainHeader from '@/components/common/header/main/MainHeader'
import Nav from '@/components/common/nav/Nav'
import { client } from '@/lib/apollo/client'
import { NextAuthProvider } from '@/utils/NextAuthProvider'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NextAuthProvider>
      <ApolloProvider client={client}>
        <div className="flex w-full h-dvh overflow-hidden">
          <Nav />
          <div className="w-full">
            <MainHeader />
            <main className="w-full h-full">{children}</main>
          </div>
        </div>
      </ApolloProvider>
    </NextAuthProvider>
  )
}
