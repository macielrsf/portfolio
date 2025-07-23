import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/portfolio/' : '/',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@sections': path.resolve(__dirname, 'src/sections'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@translations': path.resolve(__dirname, 'src/translations'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    }
  }
}))
