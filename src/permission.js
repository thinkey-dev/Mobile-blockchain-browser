import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {Message} from 'element-ui'
import {getToken} from './utils/js/token'
NProgress.configure({showSpinner: false})// NProgress configuration
const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  // if (getToken()) {
  if (1) {
    if (to.path === '/login') {
      next({path: '/'})
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      next()
      NProgress.done()
    }
  }else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      let path = '%2Fhome'// 变量path为重新登录后重定向的页面
      next(`/login?redirect=${path}`)
      // next(`/login?redirect=${to.path}`) // 这种写法默认再次登陆后跳到刚刚登出的界面
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
