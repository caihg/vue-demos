import Login from './components/login/login.vue'
import Container from './components/container/container.vue'
import UserHome from './components/container/userHome.vue'
import Platform from './components/asideContainer/platform.vue'
import UserList from './components/platform/userList.vue'
import RightsManagement from './components/platform/rightsManagement.vue'
import Goods from './components/asideContainer/goods.vue'
import GoodsList from './components/goods/list.vue'
import GoodsManagement from './components/goods/management.vue'

import NotFound from './components/error/notFound.vue'

export default [
  {
    path: '/',
    component: Login
  },
  {
    path: '/page',
    component: Container,
    children: [
      {
        path: 'userHome',
        component: UserHome
      },
      {
        path: 'platform',
        redirect: 'platform/userList', // 默认指向用户列表（UserList）
        component: Platform,
        children: [
          {
            path: 'userList',
            component: UserList
          },
          {
            path: 'rightsManagement',
            component: RightsManagement
          }
        ]
      },
      {
        path: 'goods',
        component: Goods,
        children: [
          {
            path: '/',
            component: GoodsList
          },
          {
            path: 'management/:id?', // 匹配 /management 和 /management/x 两种情况
            component: GoodsManagement
          }
        ]
      }
    ]
  },
  { // 404页面：必须位于最后，否则其它的路由地址都会使用 NotFound 组件
    path: '*',
    component: NotFound
  }
]
