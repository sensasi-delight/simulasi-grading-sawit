import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import './instrument'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Providers } from './providers'
import { BrowserRouter, Routes, Route } from 'react-router'
import Footer from './components/footer'
// pages
import App from './app'
import NotFoundPage from './pages/not-found'
import PrivacyPolicyPage from './pages/privacy-policy'
import TermsAndConditionsPage from './pages/terms'

const root = document.getElementById('root')

if (!root) {
    throw new Error('Root element not found')
}

createRoot(root).render(
    <StrictMode>
        <BrowserRouter>
            <Providers>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route
                        path="/privacy-policy"
                        element={<PrivacyPolicyPage />}
                    />
                    <Route path="/terms" element={<TermsAndConditionsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Providers>
            <Footer />
        </BrowserRouter>
    </StrictMode>,
)
