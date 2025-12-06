import withSerwist from '@/utils/next-configs/with-serwist'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: 'export',
    distDir: 'dist',

    experimental: {
        optimizePackageImports: ['@mui/material', '@mui/icons-material'],
    },
}

export default withSerwist(nextConfig)
