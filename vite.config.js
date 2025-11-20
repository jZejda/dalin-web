import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  
  // Vite plugin pro zpracování SVG
  optimizeDeps: {
    include: ['lucide-static']
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        oprojektu: 'oprojektu.html',
        napoveda: 'napoveda.html',
        kontakt: 'kontakt.html'
      }
    }
  }
});

