
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './i18n/langs';
import store from './store'
import './assets/font_class/iconfont.css'
import utils from './utils/js/utils'
import './permission'
import '../theme/index.css'
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(utils)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
