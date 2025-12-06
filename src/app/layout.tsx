import type { Metadata, Viewport } from 'next'
import { Providers } from '@/providers'
import Footer from '@/components/footer'
import { Roboto } from 'next/font/google'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import CssBaseline from '@mui/material/CssBaseline'

const APP_NAME = 'Simulasi Grading Sawit'
const APP_DEFAULT_TITLE = 'Simulasi Grading Sawit'
const APP_TITLE_TEMPLATE = '%s - Simulasi Grading Sawit'
const APP_DESCRIPTION = 'Aplikasi simulasi perhitungan grading kelapa sawit'

export const metadata: Metadata = {
    applicationName: APP_NAME,
    title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: APP_DEFAULT_TITLE,
        // startUpImage: [],
    },
    other: {
        'google-adsense-account': 'ca-pub-8776232484970024',
    },
    formatDetection: {
        telephone: false,
    },
    openGraph: {
        type: 'website',
        siteName: APP_NAME,
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
    twitter: {
        card: 'summary',
        title: {
            default: APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE,
        },
        description: APP_DESCRIPTION,
    },
}

export const viewport: Viewport = {
    themeColor: '#f44336',
    width: 'device-width',
    initialScale: 1,
}

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="id" className={roboto.variable}>
            <body>
                <AppRouterCacheProvider>
                    <Providers>
                        <CssBaseline />

                        {children}
                        <Footer />
                    </Providers>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}
