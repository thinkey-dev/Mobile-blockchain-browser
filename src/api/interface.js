import request from '@/utils/js/request'

export function login(username, password) {
  return request({
    url: '/v1/investmentAdmin/user/login',
    method: 'post',
    data: {
      "account": username,
      "password": password,
    }
  })
}
/*注销登录*/
export function logout() {
  return request({
    url:'/v1/investmentAdmin/user/loginout ',
    method: 'get',
    params:{}
  })
}

/*获取表格信息*/
export function getPersonInfo(e) {
  return request({
    url:'/v1/investmentAdmin/info/getPersonInfo',
    method: 'post',
    data:e
  })
}

