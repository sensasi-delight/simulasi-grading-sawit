import App from '@/app'
import type { Metadata } from 'next'

export default function HomePage() {
    return <App />
}

export const metadata: Metadata = {
    title: 'Simulasi Grading Sawit | Sensasi',
    description:
        'Aplikasi simulasi grading kelapa sawit menggunakan metode SAW (Simple Additive Weighting) untuk membantu petani dan pengolah kelapa sawit dalam menentukan kualitas buah sawit secara akurat dan efisien.',
}
