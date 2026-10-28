import { createRemoteJWKSet, jwtVerify } from 'jose'
import { firebaseConfig } from '@/config/firebase-config'

const publicKeys = createRemoteJWKSet(new URL(
  'https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com'
))

export async function verifyFirebaseToken(token: string) {
  const { payload } = await jwtVerify(token, publicKeys, {
    algorithms: ['RS256'],
    issuer: `https://securetoken.google.com/${firebaseConfig.projectId}`,
    audience: firebaseConfig.projectId,
    requiredClaims: ['exp', 'iat', 'auth_time', 'sub'],
  })
  const now = Math.floor(Date.now() / 1000)
  if (!payload.sub || payload.sub.length > 128 ||
      typeof payload.auth_time !== 'number' || payload.auth_time > now ||
      typeof payload.iat !== 'number' || payload.iat > now) {
    throw new Error('Invalid Firebase token claims')
  }
  return payload
}
