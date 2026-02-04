import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: 'all'
  },
  preview: {
    host: true,
    allowedHosts: 'all'
  }
})