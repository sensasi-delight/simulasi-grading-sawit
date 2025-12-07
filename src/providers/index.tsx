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
    typography: {
        fontSize: 18,
        htmlFontSize: 18,
        fontWeightLight: 400,
        fontWeightRegular: 400,
        fontWeightMedium: 700,
        fontWeightBold: 700,
        h1: {
            fontSize: '3rem',
            fontWeight: 700,
            lineHeight: 1.3,
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.3,
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.4,
        },
        h4: {
            fontSize: '1.75rem',
            fontWeight: 700,
            lineHeight: 1.4,
        },
        h5: {
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: 1.5,
        },
        h6: {
            fontSize: '1.25rem',
            fontWeight: 700,
            lineHeight: 1.5,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.8,
            fontWeight: 400,
        },
        body2: {
            fontSize: '0.95rem',
            lineHeight: 1.8,
            fontWeight: 400,
        },
        button: {
            fontSize: '1.1rem',
            fontWeight: 700,
            textTransform: 'none',
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
