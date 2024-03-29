import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/AntdRegistry'

import './globals.css'
import Navigation from '@/components/Navigation'
import { ApolloWrapper } from '@/lib/Apollo-Wraper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Navigation/>
          <ApolloWrapper>
          {children}
          </ApolloWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
