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

/*升级审批 检索*/
export function upgradeapproval(e) {
  return request({
    url:'v1/investmentAdmin/node/upgradeapproval',
    method: 'post',
    data:e
  })
}
/*升级审批 通过驳回申请*/
export function approvalexe(e) {
  return request({
    url:'v1/investmentAdmin/node/approvalexe',
    method: 'post',
    data:e
  })
}
/*升级历史 获取数据/检索*/
export function upgradehistory(e) {
  return request({
    url:'v1/investmentAdmin/node/upgradehistory',
    method: 'post',
    data:e
  })
}

