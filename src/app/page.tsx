import LandingPage from '@/components/landing-page'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Simulasi Grading Sawit - Kalkulator Grading Kelapa Sawit TBS Indonesia',
    description:
        'Kalkulator grading kelapa sawit gratis untuk menghitung potongan dan insentif TBS. Pahami sistem grading, tingkatkan kualitas panen, dan maksimalkan pendapatan Anda. Panduan lengkap tersedia.',
    keywords: [
        'grading kelapa sawit',
        'kalkulator TBS',
        'hitung grading sawit',
        'tandan buah segar',
        'buah mentah sawit',
        'berondolan bersih',
        'potongan TBS',
        'insentif sawit',
        'petani kelapa sawit',
        'rendemen minyak sawit',
    ],
    openGraph: {
        title: 'Simulasi Grading Sawit - Kalkulator Grading Kelapa Sawit TBS',
        description:
            'Aplikasi gratis untuk menghitung grading kelapa sawit dengan transparansi penuh. Bantu petani memahami sistem perhitungan harga TBS.',
        type: 'website',
        locale: 'id_ID',
    },
    alternates: {
        canonical: 'https://simulasi-grading-sawit.web.app',
    },
}

export default function HomePage() {
    return (
        <>
            <script
                type="application/ld+json"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: INTENTIONAL_USAGE
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'WebApplication',
                        name: 'Simulasi Grading Sawit',
                        description:
                            'Aplikasi kalkulator grading kelapa sawit untuk petani dan pelaku industri',
                        url: 'https://simulasi-grading-sawit.web.app',
                        applicationCategory: 'BusinessApplication',
                        operatingSystem: 'Any',
                        offers: {
                            '@type': 'Offer',
                            price: '0',
                            priceCurrency: 'IDR',
                        },
                        creator: {
                            '@type': 'Organization',
                            name: 'Sensasi Apps',
                            url: 'https://github.com/sensasi-apps',
                        },
                        inLanguage: 'id',
                        isAccessibleForFree: true,
                        featureList: [
                            'Kalkulator Grading TBS',
                            'Panduan Lengkap Grading',
                            'Simpan Riwayat Perhitungan',
                            'Offline Support (PWA)',
                            '100% Gratis',
                        ],
                    }),
                }}
            />
            <LandingPage />
        </>
    )
}
