import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['42e4-2c0f-2a80-b8-1410-d5df-7e6d-40c5-2108.ngrok-free.app']
  }
})
