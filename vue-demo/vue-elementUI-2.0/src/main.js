import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

import routes from './routes'
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

import Main from './components/main.vue'
new Vue({
  el: '#app',
  router,
  render: h => h(Main)
})
