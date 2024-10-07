import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    host: true,
    strictPort: true,
  },
  // server: {
  //   host: '0.0.0.0',
  //   https: {
  //     key: fs.readFileSync('localhost-key.pem'),
  //     cert: fs.readFileSync('localhost.pem')
  //   }
  // },
})
