import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 👇 This is the key to enable React Router to work on refresh or direct URL access
    historyApiFallback: true,
  },
})
