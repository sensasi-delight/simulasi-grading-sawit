import Calculator from '@/components/calculator'
import type { Metadata } from 'next'

export default function HomePage() {
    return <Calculator />
}

export const metadata: Metadata = {
    title: 'Beranda — Simulasi Grading Sawit',
}
