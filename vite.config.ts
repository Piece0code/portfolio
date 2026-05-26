import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const repoName = 'portfolio' // your GitHub repo name
  return {
    base: mode === 'production' ? /${repoName}/ : '/',
    plugins: [
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './app'),
      },
    },
    assetsInclude: ['/*.svg', '/*.csv'],
  }
})
