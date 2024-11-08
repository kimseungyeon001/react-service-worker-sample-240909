import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { certificateFor } from 'devcert'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  // const { key, cert } = await certificateFor('localhost')

  return {
    plugins: [react(),],
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name][extname]',
        },
      },
    },
    // @see https://dev.classmethod.jp/articles/vite-https-localhost-devcert/
    // server: {
    //   open: true,
    //   https: { key, cert },
    // },
  }
})

