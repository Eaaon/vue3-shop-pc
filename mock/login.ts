import type { MockMethod } from 'vite-plugin-mock'
import Mock, { Random } from 'mockjs'

const loginSucccess = Mock.mock({
  code: '000000',
  msg: '登录成功',
  status: '200',
  data: true
})

export default [
  {
    url: `/login`,
    method: 'post',
    response: ({ query }: any) => {
      return loginSucccess
    }
  }
] as MockMethod[]
