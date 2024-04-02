import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'
import svgLoader from 'vite-svg-loader'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'path'

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    plugins: [
      vue(),
      UnoCSS(),
      viteMockServe({
        mockPath: './mock',
        localEnabled: true,
        prodEnabled: false
      }),
      svgLoader(),
      VueI18nPlugin({
        // runtimeOnly: true,
        // compositionOnly: true,
        include: [path.resolve(__dirname, './locales/**')]
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
