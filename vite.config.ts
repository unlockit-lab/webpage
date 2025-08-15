import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        mailer: fileURLToPath(new URL('./mailer.html', import.meta.url)),
        'locales/en': fileURLToPath(new URL('./src/locales/en.json', import.meta.url)),
        'locales/pl': fileURLToPath(new URL('./src/locales/pl.json', import.meta.url)),
      },
    },
  },
  publicDir: 'public',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
