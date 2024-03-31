import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:uno.css'
import 'uno.css'

import router from './router'
import { setupStore } from '@/store'

const app = createApp(App)
setupStore(app)
app.use(router)
app.mount('#app')
