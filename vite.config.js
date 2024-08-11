import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/personal_portfolio/',  // Set this to your repository name
  build: {
    outDir: 'build',
  },
})
