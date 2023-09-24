import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const options: NextAuthOptions = {
  debug: true,
  session: { strategy: 'jwt' },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
    })
  ],
  pages: {
    signIn: '/'
  },
  callbacks: {
    jwt: async ({ token, user, account, profile }) => {
      console.log('jwt callback', { token, user, account, profile })

      if (account && profile) {
        const variables = {
          input: {
            provider: account.provider,
            uid: profile.sub || user.id,
            name: user.name,
            email: user.email,
            image: user.image
          }
        }
        console.log('variables: ', variables)
      }

      return token
    },
    session: ({ session, token }) => {
      console.log('session callback', { session, token })

      return {
        ...session
      }
    }
  }
}