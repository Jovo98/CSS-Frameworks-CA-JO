import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                feed: resolve(__dirname, 'feed/feed.html'),
                profile: resolve(__dirname, 'profile/profile.html'),
            },
        },
    },
})