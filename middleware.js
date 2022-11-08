import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware (req) {
  const url = req.nextUrl.clone()
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (!session) {
    url.pathname = '/'
    return NextResponse.redirect(url)
  }
}

export const config = { matcher: ['/home', '/bag', '/update-profile', '/add-product'] }
