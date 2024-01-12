'use server'
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc"

export const {getClient} = registerApolloClient(() => {
    return new ApolloClient({
      link: createHttpLink({
        uri: 'https://hada-be-production-7df1.up.railway.app/graphql'
      }),
      cache: new InMemoryCache()
    })
  })
