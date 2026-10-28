import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'
import { verifyFirebaseToken } from '@/lib/verify-firebase-token'

export async function POST(request: Request) {
  const token = request.headers.get('authorization')?.match(/^Bearer (\S+)$/i)?.[1]
  if (!token) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
  }

  let user
  try {
    user = await verifyFirebaseToken(token)
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
  }
  if (typeof user.email === 'string' && user.email.includes('flanders')) {
    return NextResponse.json({ error: 'Access denied' }, { status: 403 })
  }

  revalidateTag('public-content', { expire: 0 })
  return NextResponse.json({ revalidated: true })
}
