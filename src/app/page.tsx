import Calculator from '@/components/calculator'
import type { Metadata } from 'next'

export default function HomePage() {
    return <Calculator />
}

export const metadata: Metadata = {
    title: 'Beranda — Simulasi Grading Sawit',
    description:
        'Kalkulator grading kelapa sawit untuk menghitung potongan dan insentif TBS. Pelajari cara perhitungan manual di panduan lengkap kami.',
}
