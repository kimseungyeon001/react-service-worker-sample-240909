import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { certificateFor } from 'devcert'

// https://vitejs.dev/config/
// https://vitejs.dev/config/#async-config
export default defineConfig(async () => {
  const { key, cert } = await certificateFor('localhost')
  return {
    plugins: [react()],
    server: {
      open: true,
      https: { key, cert },
    },
  }
})

