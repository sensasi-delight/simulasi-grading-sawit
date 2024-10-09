// vendors
import { useEffect, type ReactNode } from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import { getSerwist } from 'virtual:serwist'
import { red } from '@mui/material/colors'
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
    useEffect(() => {
        const loadSerwist = async () => {
            if ('serviceWorker' in navigator) {
                const serwist = await getSerwist()

                serwist?.addEventListener('installed', () => {
                    console.log('Serwist installed!')
                })

                void serwist?.register()
            }
        }

        loadSerwist().catch(err => {
            throw err
        })
    }, [])

    return (
        <ThemeProvider theme={THEME}>
            <FirebaseProvider>
                <GlobalsProvider>{children}</GlobalsProvider>
            </FirebaseProvider>
        </ThemeProvider>
    )
}
