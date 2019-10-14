const getters = {

  language: state => state.app.language,


  /*登录信息部分*/
  token: state => state.login.token,
  roles: state => state.login.roles,
}
export default getters
