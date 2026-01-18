import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

// Plugin to copy index.html to 404.html after build
function copy404Plugin() {
  return {
    name: 'copy-404',
    closeBundle() {
      const indexPath = resolve('dist', 'index.html')
      const notFoundPath = resolve('dist', '404.html')
      try {
        copyFileSync(indexPath, notFoundPath)
        console.log('✓ Copied index.html to 404.html for GitHub Pages SPA routing')
      } catch (err) {
        console.error('Failed to copy index.html to 404.html:', err)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copy404Plugin()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
