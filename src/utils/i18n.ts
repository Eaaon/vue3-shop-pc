// 多组件库的国际化和本地项目国际化兼容
import { createI18n } from 'vue-i18n'
import type { App } from 'vue'

// element-plus国际化
import enLocale from 'element-plus/dist/locale/en.mjs'
import zhLocale from 'element-plus/dist/locale/zh-cn.mjs'
import zhCN from '@/locales/zh-cn'
import en from '@/locales/en'

export const localesConfigs = {
  zh: {
    ...zhCN,
    ...zhLocale
  },
  en: {
    ...en,
    ...enLocale
  }
}

/** 此函数只是配合i18n Ally插件来进行国际化智能提示，并无实际意义（只对提示起作用），如果不需要国际化可删除 */
export const $t = (key: string) => key

const language = (navigator.language || 'en').toLocaleLowerCase()
console.log('language', language)
export const i18n = createI18n({
  locale: localStorage.getItem('lang') || language.split('-')[0] || 'en', // 设置语言类型
  legacy: false, // 如果要支持compositionAPI，此项必须设置为false;
  globalInjection: true, // 全局注册$t方法
  messages: localesConfigs
})

export function useI18n(app: App) {
  app.use(i18n)
}
