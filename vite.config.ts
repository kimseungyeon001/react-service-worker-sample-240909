import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { certificateFor } from 'devcert'

// NOTE: service worker はhttpsでのみ動く、ただ、localhostの場合はhttpでも問題ない
// ↓の指定はemulatorで動くケースのために設定している
// emulatorで動く場合はngrokなどのサービスを利用
// https://vitejs.dev/config/
export default defineConfig(async () => {
  // const { key, cert } = await certificateFor('localhost')

  return {
    plugins: [react(),],
    build: {
      manifest: true,
    },
    // @see https://dev.classmethod.jp/articles/vite-https-localhost-devcert/
    // server: {
    //   open: true,
    //   https: { key, cert },
    // },
  }
})

