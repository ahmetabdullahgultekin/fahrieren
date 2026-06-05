import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// Vitest config kept separate from vite.config.ts so the production build config
// stays free of test concerns. jsdom gives component tests a DOM.
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./src/test/setup.ts'],
        include: ['src/**/*.{test,spec}.{ts,tsx}'],
        css: false,
    },
})
