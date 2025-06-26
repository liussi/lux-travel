import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' // ← Додай це

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(), // ← І сюди
  ],
})