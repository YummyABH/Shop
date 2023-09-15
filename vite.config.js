import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@assets': fileURLToPath(new URL('./src/assets/', import.meta.url)),
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Shop/'
    : '/'
})


