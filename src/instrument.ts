import { init } from '@sentry/react'

if (import.meta.env.PROD) {
    init({
        dsn: import.meta.env.VITE_SENTRY_DSN,
        integrations: [],
    })
}
