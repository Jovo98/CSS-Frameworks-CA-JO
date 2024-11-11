import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
export default defineConfig({
   root,
    build: {
       outDir,
        emptyOutDir: true,
        rollupOptions: {
           input: {
               main: resolve(root, 'profile.html'),
               feed: resolve(root, 'feed', 'profile.html'),
               profile: resolve(root, 'profile', 'profile.html'),
           }
        }
    }
})