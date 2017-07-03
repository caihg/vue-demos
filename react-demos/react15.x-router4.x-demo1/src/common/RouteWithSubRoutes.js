import React from 'react'
import { Route } from 'react-router-dom'

export default route => (
  <Route path={route.path} render={props => (
      // 把子路由向下传递以达到嵌套
      <route.component {...props} routes={route.children} path={route.path} />
    )
  }/>
)
