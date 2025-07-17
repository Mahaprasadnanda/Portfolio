import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // 👈 this is the important fix for Vercel build
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
