import { NextRequest, NextResponse } from 'next/server'
import { useLoginStore } from './store/zustand'

const protectedRoutes = ['/history']
const loggedIn = true

export default function middleware(req: any) {
    const isLoggedIn = useLoginStore.getState()
    console.log("isLoggedIn", isLoggedIn)
    // const isProtected = protectedRoutes.includes(req.nextUrl.pathname)
    // if(!isLoggedIn && isProtected) {
    if(!loggedIn) {
        const absoluteURL = new URL('/', req.nextUrl.origin) 
        return NextResponse.redirect(absoluteURL.toString())
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/history/:path*']
} 