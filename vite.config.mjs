import { defineConfig } from 'vite';

export default defineConfig({
  root: '.', // Root directory (current folder)
  build: {
    outDir: 'dist', // Output directory for the build
    rollupOptions: {
      input: {
        main: 'index.html', // Main entry point
        certifications: 'assets/html/certifications.html', // Additional HTML page
      },
    },
  },
  server: {
    open: '/index.html', // Default page to open in dev mode
  },
});
