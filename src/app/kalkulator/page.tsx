import Calculator from '@/components/calculator'
import type { Metadata } from 'next'

export default function KalkulatorPage() {
    return <Calculator />
}

export const metadata: Metadata = {
    title: 'Kalkulator Grading Sawit - Simulasi Grading Sawit',
    description:
        'Kalkulator grading kelapa sawit untuk menghitung potongan dan insentif TBS berdasarkan kualitas buah. Gratis dan mudah digunakan.',
}
