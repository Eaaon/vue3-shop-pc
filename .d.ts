declare module '*.png' {
  const content: any
  export default content
}

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

declare module '*.svg'

declare module 'element-plus/dist/locale/en.mjs'
declare module 'element-plus/dist/locale/zh-cn.mjs'
