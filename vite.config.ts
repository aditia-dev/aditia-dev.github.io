import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    cssMinify: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
