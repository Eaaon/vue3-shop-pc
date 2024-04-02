import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:uno.css'
import 'uno.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { useI18n } from '@/utils/i18n'
// import { createI18n } from 'vue-i18n'

import router from './router'
import { setupStore } from '@/store'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn
})

// const message = {
//   en: {
//     hello: 'hello world'
//   },
//   zh: {
//     hello: 'こんにちは、世界'
//   }
// }

// const i18n = createI18n({
//   locale: 'en', // 设置语言类型
//   legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
//   globalInjection: true, // 全局注册$t方法
//   messages: message
// })

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

setupStore(app)
app.use(router)
app.use(ElementPlus)
app.use(useI18n)
app.mount('#app')
