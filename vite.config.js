// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // on n’a pas besoin des sourcemaps en prod
    sourcemap: false,
    // esbuild est ultra rapide pour minifier
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // on sépare GSAP et Three en chunks distincts
            if (id.includes('gsap'))  return 'vendor-gsap';
            if (id.includes('three')) return 'vendor-three';
            return 'vendor'; 
          }
        }
      }
    }
  }
});