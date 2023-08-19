'use client'
import { useCallback } from 'react'

import { User as FirebaseUser } from 'firebase/auth'
import { Authenticator, FirebaseCMSApp } from 'firecms'
import { CustomLoginView } from '@/views/login'

import 'typeface-rubik'
import '@fontsource/ibm-plex-mono'

import { firebaseConfig } from '@/config/firebase-config'
import { slidesCollection, programsCollection } from '@/collections'

export default function App() {
  const myAuthenticator: Authenticator<FirebaseUser> = useCallback(
    async ({ user, authController }) => {
      if (user?.email?.includes('flanders')) {
        throw Error('Stupid Flanders!')
      }

      console.log('Allowing access to', user?.email)
      // This is an example of retrieving async data related to the user
      // and storing it in the controller's extra field.
      const sampleUserRoles = await Promise.resolve(['admin'])
      authController.setExtra(sampleUserRoles)
      return true
    },
    []
  )

  return (
    <FirebaseCMSApp
      primaryColor='#b06dff'
      secondaryColor='#ff9900'
      name={'The Freshy Clinic | MANAGE'}
      logo={'/logo.png'}
      authentication={myAuthenticator}
      collections={[slidesCollection, programsCollection]}
      firebaseConfig={firebaseConfig}
      signInOptions={['password']}
      LoginView={CustomLoginView}
      locale={'th'}
      basePath='/admin'
    />
  )
}
