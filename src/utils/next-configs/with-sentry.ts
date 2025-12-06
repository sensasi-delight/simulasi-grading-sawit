import { withSentryConfig } from '@sentry/nextjs'
import type { NextConfig } from 'next'

export default (nextConfig: NextConfig) =>
    withSentryConfig(nextConfig, {
        org: 'sensasi-apps',
        project: 'simulasi-grading-sawit',
        // Only print logs for uploading source maps in CI
        // Set to `true` to suppress logs
        silent: !process.env.CI,
        // Automatically tree-shake Sentry logger statements to reduce bundle size
        disableLogger: true,

        // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
        // This can increase your server load as well as your hosting bill.
        // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-side errors will fail.
        tunnelRoute: true, // Generates a random route for each build (recommended)
    })
