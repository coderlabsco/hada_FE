'use client'
import { useLayoutEffect } from 'react'
import { usePathname, redirect } from 'next/navigation'
import { useLoginStore } from '@/store/zustand'

export default function Template({ children }: { children: JSX.Element }): JSX.Element {
  const authed = useLoginStore(state => state.access_token)

  useLayoutEffect(() => {
    if (!authed) {
      redirect('/login')
    }
  }, [authed])

  return children
}
