import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/personal_portfolio/',  // Adjust to match your GitHub Pages repository name
  build: {
    outDir: 'build',  // Ensure build output goes to 'build'
  },
});