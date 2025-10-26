import { createContext, type ReactNode, useContext } from 'react'
import { initializeApp } from 'firebase/app'
import {
    getAnalytics,
    logEvent as logEventVendor,
    setUserProperties,
} from 'firebase/analytics'
import packageJson from '../../../package.json'

/**
 * Firebase configuration
 *
 * production conf is setted in https://github.com/sensasi-delight/simulasi-grading-sawit/settings/environments
 */
const FIREBASE_APP = import.meta.env.PROD
    ? initializeApp({
          apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
          authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
          projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
          storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
          messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
          appId: '1:608340716838:web:4bcc8d7a239554e1eb65e7',
          measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
      })
    : null

const analytics = FIREBASE_APP ? getAnalytics(FIREBASE_APP) : null

function logEvent(eventName: string) {
    if (!analytics) return

    setUserProperties(analytics, { wpa_version: packageJson.version })

    return logEventVendor(analytics, eventName)
}

const CONTEXT = createContext<{
    logEvent: (eventName: string) => void
}>({
    logEvent: logEvent,
})

export function FirebaseProvider({ children }: { children: ReactNode }) {
    return (
        <CONTEXT.Provider
            value={{
                logEvent,
            }}>
            {children}
        </CONTEXT.Provider>
    )
}

export function useFirebase() {
    return useContext(CONTEXT)
}
