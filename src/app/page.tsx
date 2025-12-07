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
}

export default function HomePage() {
    return <LandingPage />
}
