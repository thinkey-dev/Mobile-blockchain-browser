import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)
export const constantRouterMap = [
  {
    path: '/',
    redirect: '/index',
    hidden: true,
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/home/index'),
    hidden: true,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index'),
    hidden: true,
  },
  {
    path: '/user_info',
    name: 'login',
    component: () => import('../components/userInfo'),
    hidden: true,
  },
]


export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
