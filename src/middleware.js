



import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export const middleware =(request) => {
  const token = cookies(request).get('next-auth.session-token')
  if(!token){
    return NextResponse.redirect(new URL('/api/auth/signin', request.url))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/dashboard',
}