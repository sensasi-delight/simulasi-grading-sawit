import type { ReactNode } from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import { red } from '@mui/material/colors'
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
        <ThemeProvider theme={THEME}>
            <FirebaseProvider>
                <GlobalsProvider>{children}</GlobalsProvider>
            </FirebaseProvider>
        </ThemeProvider>
    )
}
