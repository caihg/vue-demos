import Login from './components/login/login.vue'
import Container from './components/container/container.vue'
import UserHome from './components/container/userHome.vue'
import Platform from './components/asideContainer/platform.vue'
import UserList from './components/platform/userList.vue'
import UserCreate from './components/platform/userCreate.vue'
import Product from './components/asideContainer/product.vue'
import ProductList from './components/product/list.vue'
import ProductBrand from './components/product/brand.vue'
import NotFound from './components/error/notFound.vue'

export default [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/login'
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
        component: Platform,
        children: [
          {
            path: 'userList',
            component: UserList
          },
          {
            path: 'userCreate',
            component: UserCreate
          }
        ]
      },
      {
        path: 'product',
        component: Product,
        children: [
          {
            path: 'list',
            component: ProductList
          },
          {
            path: 'brand',
            component: ProductBrand
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
