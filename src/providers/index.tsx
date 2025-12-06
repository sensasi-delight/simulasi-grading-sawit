'use client'

// vendors
import type { ReactNode } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { red } from '@mui/material/colors'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
// local providers
import { GlobalsProvider } from './components/globals-provider'
import { FirebaseProvider } from './components/firebase-provider'

const THEME = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
})

export function Providers({ children }: { children: ReactNode }) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={THEME}>
                <FirebaseProvider>
                    <GlobalsProvider>{children}</GlobalsProvider>
                </FirebaseProvider>
            </ThemeProvider>
        </AppRouterCacheProvider>
    )
}
