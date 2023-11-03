import jwt from 'jsonwebtoken'
import type { NextAuthOptions } from 'next-auth'
import AzureADProvider from 'next-auth/providers/azure-ad'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import { SIGN_IN_MUTATION } from '@/utils/graph/mutations'

export const options: NextAuthOptions = {
  debug: true,
  session: { strategy: 'jwt' },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    AzureADProvider({
      tenantId: process.env.AZURE_AD_B2C_TENANT_NAME,
      clientId: process.env.AZURE_AD_B2C_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_B2C_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/',
  },
  callbacks: {
    jwt: async ({ token, user, account, profile }) => {
      if (account && profile) {
        const payload = {
          email: user.email,
        }
        const customToken = jwt.sign(payload, process.env.NEXTAUTH_SECRET!)
        token.customJwtToken = customToken

        const variables = {
          input: {
            provider: account.provider,
            uid: profile.sub || user.id,
            name: user.name,
            email: user.email,
            image: user.image || '',
          },
        }
        const res = await fetch(process.env.BACKEND_URL!, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.customJwtToken}`,
          },
          body: JSON.stringify({
            query: SIGN_IN_MUTATION.loc?.source.body,
            variables: variables,
          }),
        })
        const data = await res.json()

        token.user = data.data.signIn
      }

      return token
    },
    session: ({ session, token }) => {
      return {
        ...session,
        customJwtToken: token.customJwtToken,
        sessionUser: token.user,
      }
    },
  },
}
