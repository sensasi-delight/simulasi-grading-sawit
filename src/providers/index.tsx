import type { ReactNode } from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import { red } from '@mui/material/colors'
import { GlobalsProvider } from './components/globals-provider'

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
            <GlobalsProvider>{children}</GlobalsProvider>
        </ThemeProvider>
    )
}
