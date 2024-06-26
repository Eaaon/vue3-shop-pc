import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import 'virtual:uno.css'
import 'uno.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { useI18n } from '@/utils/i18n'

import router from './router'
import { setupStore } from '@/store'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

setupStore(app)
app.use(router)
app.use(ElementPlus)
app.use(useI18n)
app.mount('#app')
