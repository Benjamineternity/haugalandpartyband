import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        galleri: resolve(__dirname, 'galleri/index.html'),
        kalender: resolve(__dirname, 'kalender/index.html'),
        anmeldelser: resolve(__dirname, 'anmeldelser/index.html'),
        booking: resolve(__dirname, 'booking/index.html'),
        privacypolicy: resolve(__dirname, 'privacypolicy/index.html'),
        terms: resolve(__dirname, 'terms/index.html'),
      }
    }
  }
});
