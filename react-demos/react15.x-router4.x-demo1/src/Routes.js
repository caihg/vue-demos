import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import RouteWithSubRoutes from './common/RouteWithSubRoutes.js'
import NotFound from './modules/error/NotFound.js'
import Login from './modules/login/Login.js'
import Container from './modules/container/Container.js'
import Home from './modules/container/Home.js'
import Goods from './modules/asideContainer/Goods.js'
import List from './modules/goods/List.js'
import Brand from './modules/goods/Brand.js'

const routes = [
  { path: '/home',
    component: Home
  },
  { path: '/goods',
    component: Goods,
    children: [
      { path: '/goods/list',
        component: List
      },
      { path: '/goods/brand',
        component: Brand
      }
    ]
  }
]

export default () => (
  <Router>
    <Switch>
      <Route path='/login' component={Login} />
      <Container>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Switch>
  </Router>
)
