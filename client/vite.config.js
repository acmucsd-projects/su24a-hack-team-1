import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite automatically exposes environment variables prefixed with VITE_
  // Access them in your code using: import.meta.env.VITE_API_URL
  // This is more secure than exposing all process.env variables
  server: {
    proxy: {
      '/api': 'http://localhost:4000', // Proxy API requests to local server for development
      '/profile': 'http://localhost:4000', // Proxy profile requests
      '/posts': 'http://localhost:4000', // Proxy posts requests
      '/upload': 'http://localhost:4000', // Proxy upload requests
    }
  },
  // On Vercel, /api routes automatically point to the serverless functions
  // No need to change production URLs
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split react-icons into its own chunk (it's a large library)
          'react-icons': ['react-icons/hi', 'react-icons/hi2', 'react-icons/fa', 'react-icons/md'],
          // Split vendor libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Split animation libraries
          'animation-vendor': ['framer-motion', 'gsap'],
        },
      },
    },
    // Increase chunk size warning limit to 1000 KB (optional)
    chunkSizeWarningLimit: 1000,
  },
})
