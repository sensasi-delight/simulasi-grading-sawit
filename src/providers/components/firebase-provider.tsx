'use client'

import { createContext, type ReactNode, useContext } from 'react'
import { initializeApp } from 'firebase/app'
import {
    getAnalytics,
    logEvent as logEventVendor,
    setUserProperties,
} from 'firebase/analytics'
import packageJson from '@/../package.json'

/**
 * Firebase configuration
 *
 * production conf is set in https://github.com/sensasi-delight/simulasi-grading-sawit/settings/environments
 */
const FIREBASE_APP = process.env.FIREBASE_API_KEY
    ? initializeApp({
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: '1:608340716838:web:4bcc8d7a239554e1eb65e7',
          measurementId: process.env.FIREBASE_MEASUREMENT_ID,
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
