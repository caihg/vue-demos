import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import Axios from 'axios'

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.prototype.$http = Axios

import routes from './routes'
const router =  new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

import jwt from 'jsonwebtoken'

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('demo-token');

  const decoded = token && jwt.verify(token, 'vue-koa-demo');
  if (decoded) {
    if (decoded.originExp - Date.now() < 0) { // 已过期
      localStorage.removeItem('demo-token');
    } else {
      decoded.originExp = Date.now() + 60 * 60 * 1000;
      token = jwt.sign(decoded, 'vue-koa-demo');
      localStorage.setItem('demo-token', token);
    }
  }

  if (to.path == '/') {
    if (token) {
      next('/page/userHome')
    }
    next();
  } else {
    if (token) {
      Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token; // 全局设定 header 的 token 验证
      next()
    } else {
      next('/')
    }
  }
})

import Main from './components/main.vue'
const app = new Vue({
  router,
  render: h => h(Main)
}).$mount('#app')
