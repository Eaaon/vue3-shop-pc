import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:uno.css'
import 'uno.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import router from './router'
import { setupStore } from '@/store'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn
})

setupStore(app)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
