import { defineConfig } from 'vite'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import { serwist } from '@serwist/vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        sentryVitePlugin({
            org: 'sensasi-apps',
            project: 'simulasi-grading-sawit',
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
})
