import {login, logout, getInfo} from '@/api/interface'
import {getToken, setToken, removeToken} from '@/utils/js/token'
import {Message} from 'element-ui'
const state = {
  token: getToken(),
  roles: {},
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },

}

const actions = {
  // 登录
  Login({commit}, userInfo) {
    const account = userInfo.username.trim()
    return new Promise((resolve, reject) => {
      login(account, userInfo.password).then(response => {
        if (response.eCode == 201) {
          Message({
            message: '用户名或密码错误！请确认后再次登录！',
            type: 'error',
            duration: 3 * 1000
          })
        } else {
          const data = response
          setToken(data.token)
          commit('SET_TOKEN', data.token)
        }
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

// 登出
  LogOut({commit, state}) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', {})
        removeToken()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
  ,

// 前端 登出
  FedLogOut({commit}) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', {})
      removeToken()
      resolve()
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
