import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  base: '/smart-phone-input/',
  plugins: [react(), dts()],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: 'src/PhoneInput.tsx',
      name: 'SmartPhoneInput',
      fileName: 'smart-phone-input',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    outDir: 'demo-dist'
  }
});
