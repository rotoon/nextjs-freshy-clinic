'use client'
import { useCallback, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'

import {
  AppBar,
  Authenticator,
  CircularProgressCenter,
  Drawer,
  FireCMS,
  FireCMSi18nProvider,
  ModeControllerProvider,
  NavigationRoutes,
  Scaffold,
  SideDialogs,
  SnackbarProvider,
  useBuildLocalConfigurationPersistence,
  useBuildModeController,
  useBuildNavigationController,
  useValidateAuthenticator,
} from '@firecms/core'
import {
  FirebaseUserWrapper,
  useFirebaseAuthController,
  useFirebaseStorageSource,
  useFirestoreDelegate,
  useInitialiseFirebase,
} from '@firecms/firebase'
import { CustomLoginView } from '@/views/login'

import 'typeface-rubik'
import '@fontsource/ibm-plex-mono'

import { firebaseConfig } from '@/config/firebase-config'
import { slidesCollection, programsCollection } from '@/collections'

export default function App() {
  return (
    <BrowserRouter basename='/admin'>
      <ClinicCMS />
    </BrowserRouter>
  )
}

function ClinicCMS() {
  useEffect(() => {
    const previousTheme = document.documentElement.dataset.theme
    const previousColorScheme = document.body.style.colorScheme
    document.body.classList.add('freshy-cms')
    return () => {
      document.body.classList.remove('freshy-cms')
      if (previousTheme === undefined) {
        delete document.documentElement.dataset.theme
      } else {
        document.documentElement.dataset.theme = previousTheme
      }
      document.body.style.colorScheme = previousColorScheme
    }
  }, [])

  const myAuthenticator: Authenticator<FirebaseUserWrapper> = useCallback(
    async ({ user, authController }) => {
      if (user?.email?.includes('flanders')) {
        throw Error('Stupid Flanders!')
      }

      const sampleUserRoles = await Promise.resolve(['admin'])
      authController.setExtra(sampleUserRoles)
      return true
    },
    []
  )

  const { firebaseApp, firebaseConfigLoading, configError } = useInitialiseFirebase({
    firebaseConfig,
  })
  const modeController = useBuildModeController()
  const authController = useFirebaseAuthController<FirebaseUserWrapper>({
    firebaseApp,
    signInOptions: ['password'],
  })
  const firestoreDelegate = useFirestoreDelegate({ firebaseApp })
  const storageSource = useFirebaseStorageSource({ firebaseApp })
  const userConfigPersistence = useBuildLocalConfigurationPersistence()
  const { authLoading, canAccessMainView } = useValidateAuthenticator<FirebaseUserWrapper>({
    authController,
    authenticator: myAuthenticator,
    dataSourceDelegate: firestoreDelegate,
    storageSource,
  })
  const navigationController = useBuildNavigationController({
    disabled: authLoading,
    collections: [slidesCollection, programsCollection],
    authController,
    dataSourceDelegate: firestoreDelegate,
  })

  if (configError) return <div role='alert'>{configError}</div>
  if (firebaseConfigLoading || !firebaseApp) return <CircularProgressCenter />

  return (
    <FireCMSi18nProvider locale='th'>
      <SnackbarProvider>
        <ModeControllerProvider value={modeController}>
          <FireCMS
            navigationController={navigationController}
            authController={authController}
            userConfigPersistence={userConfigPersistence}
            dataSourceDelegate={firestoreDelegate}
            storageSource={storageSource}
            locale='th'
            telemetry={false}
          >
            {({ loading }) => {
              if (loading || authLoading) return <CircularProgressCenter />
              if (!canAccessMainView) return <CustomLoginView />
              return (
                <Scaffold logo='/logo.png' autoOpenDrawer={false}>
                  <AppBar title='The Freshy Clinic | MANAGE' />
                  <Drawer />
                  <NavigationRoutes />
                  <SideDialogs />
                </Scaffold>
              )
            }}
          </FireCMS>
        </ModeControllerProvider>
      </SnackbarProvider>
    </FireCMSi18nProvider>
  )
}
