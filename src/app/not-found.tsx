import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Page Not Found - Simulasi Grading Sawit',
}

export default function NotFound() {
    return (
        <main>
            <strong>404 - Page Not Found</strong>
            <p>The page you are looking for does not exist.</p>
        </main>
    )
}
