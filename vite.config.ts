import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@app': resolve(`src/app`),
            '@processes': resolve(`src/processes`),
            '@widgets': resolve(`src/widgets`),
            '@features': resolve(`src/features`),
            '@entities': resolve(`src/entities`),
            '@pages': resolve(`src/pages`),
            '@shared': resolve(`src/shared`),
        },
    },
    base: '/portfolio/',
})
