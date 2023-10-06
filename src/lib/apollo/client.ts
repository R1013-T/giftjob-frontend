import {
  ApolloClient,
  createHttpLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import { getSession } from 'next-auth/react'

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_BACKEND_URL,
})

const authLink = setContext(async (_, { headers }) => {
  const session: any = await getSession()
  const customJwtToken = session.customJwtToken as string

  return {
    headers: {
      ...headers,
      authorization: customJwtToken ? `Bearer ${customJwtToken}` : '',
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
