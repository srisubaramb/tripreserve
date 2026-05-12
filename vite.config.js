import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
	tailwindcss()
  ],
  server: {
    proxy: {
      // Whenever our app requests anything starting with '/api'...
      '/api': {
        // ...forward it to this target URL:
        target: 'https://api.travelpayouts.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
