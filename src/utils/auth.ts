import { store } from '@/store'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore(store)
const APP_ID = appStore.APP_ID

const isLogin = function () {
  return getToken() || false
}

const weixinLogin = function () {
  const redirect_uri = window.location.href
  window.location.href =
    'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + APP_ID + '&redirect_uri=' + encodeURIComponent(redirect_uri) + '&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect'
}

function getUrlParams() {
  const url = window.location.search
  const result: any = {}
  if (url) {
    const query = url.substring(1)
    query.split('&').forEach((p) => {
      const item = p.split('=')
      result[item[0]] = decodeURIComponent(item[1])
    })
  }
  return result
}

function getToken() {
  return sessionStorage.getItem('token')
}

function setToken(token: string) {
  return sessionStorage.setItem('token', token)
}

function removeToken() {
  return sessionStorage.removeItem('token')
}

export default {
  isLogin,
  weixinLogin,
  getUrlParams,
  getToken,
  setToken,
  removeToken
}
