'use client'

import { createContext, type ReactNode, useContext, useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import {
    getAnalytics,
    logEvent as logEventVendor,
    setUserProperties,
    isSupported,
} from 'firebase/analytics'
import packageJson from '@/../package.json'

let FIREBASE_APP: ReturnType<typeof initializeApp> | null = null

async function logEvent(eventName: string) {
    if (FIREBASE_APP === null) return

    const analytics = (await isSupported()) ? getAnalytics(FIREBASE_APP) : null

    if (analytics === null) return

    setUserProperties(analytics, { wpa_version: packageJson.version })
    logEventVendor(analytics, eventName)
}

const CONTEXT = createContext<{
    logEvent: (eventName: string) => Promise<void>
}>({
    logEvent: logEvent,
})

export function FirebaseProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        if (FIREBASE_APP !== null) return

        /**
         * Firebase configuration
         *
         * production conf is set in https://github.com/sensasi-delight/simulasi-grading-sawit/settings/environments
         */
        FIREBASE_APP = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
            ? initializeApp({
                  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
                  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
                  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                  storageBucket:
                      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
                  messagingSenderId:
                      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
                  appId: '1:608340716838:web:4bcc8d7a239554e1eb65e7',
                  measurementId:
                      process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
              })
            : null
    }, [])

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
