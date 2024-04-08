import request from '@/utils/http'

export function loginApi(params: any) {
  return request({
    url: `/login`,
    method: 'post',
    params
  })
}
