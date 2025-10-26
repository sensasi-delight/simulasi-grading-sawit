import { defineConfig, loadEnv } from 'vite'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import { serwist } from '@serwist/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())

    return {
        plugins: [
            react({
                babel: {
                    plugins: [['babel-plugin-react-compiler']],
                },
            }),
            sentryVitePlugin({
                org: 'sensasi-apps',
                project: 'simulasi-grading-sawit',
                authToken: env.VITE_SENTRY_AUTH_TOKEN,
            }),
            serwist({
                swSrc: 'src/sw.ts',
                swDest: 'sw.js',
                globDirectory: 'dist',
                injectionPoint: 'self.__SW_MANIFEST',
                rollupFormat: 'iife',
            }),
        ],

        build: {
            sourcemap: true,
        },
    }
})
