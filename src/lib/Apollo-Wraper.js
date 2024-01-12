'use client'
import { ApolloLink, HttpLink } from "@apollo/client";
import { ApolloNextAppProvider, NextSSRApolloClient, NextSSRInMemoryCache, SSRMultipartLink } from "@apollo/experimental-nextjs-app-support/ssr";


function makeClient(){
    const httpLink = new HttpLink({uri:'https://hada-be-production-7df1.up.railway.app/graphql'})
    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link: typeof window === "undefined" ? ApolloLink.from([
            new SSRMultipartLink({
                stripDefer: true
            }),
          httpLink
        ]):httpLink
    })
}

export function ApolloWrapper({children}) {
    return (
    <ApolloNextAppProvider makeClient={makeClient}>
    {children}
    </ApolloNextAppProvider>);
}