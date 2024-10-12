<<<<<<< HEAD
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const publicpath=path==='/login'||path==='/signup'||path==='/verifyEmail'
  const token = request.cookies.get("token")?.value||''
  if(publicpath && token){
    return NextResponse.redirect(new URL('/profile',request.nextUrl))
  }
  if(!publicpath && !token){
    return NextResponse.redirect(new URL('/login',request.nextUrl))
  }
}

export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
    '/verifyEmail'
  ],
=======
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const publicpath=path==='/login'||path==='/signup'||path==='/verifyEmail'
  const token = request.cookies.get("token")?.value||''
  if(publicpath && token){
    return NextResponse.redirect(new URL('/profile',request.nextUrl))
  }
  if(!publicpath && !token){
    return NextResponse.redirect(new URL('/login',request.nextUrl))
  }
}

export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
    '/verifyEmail'
  ],
>>>>>>> bccb9a0efa33673745379d2cccc70d1a1fe9c232
}