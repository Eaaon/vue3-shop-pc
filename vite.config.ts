import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    plugins: [
      vue(),
      UnoCSS(),
      viteMockServe({
        mockPath: './mock',
        localEnabled: true,
        prodEnabled: false
      })
    ],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname
      }
    },
    server: {
      host: true,
      // port: 8991,
      proxy: {
        '/dev': {
          target: 'https://yapi.pro/mock/313769',
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/dev/, '')
        }
      }
    }
  }
})
