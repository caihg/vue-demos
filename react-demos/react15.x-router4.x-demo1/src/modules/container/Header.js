import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: localStorage.getItem('loggedIn')
    }
  }

  onLogout = () => {
    localStorage.setItem('loggedIn', '')
    this.setState({loggedIn: false})
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <Redirect to='/login' />
      )
    }

    return (
      <header className='fixed-top'>
        <div className='pull-left'>
          <h1>管理平台</h1>
          <NavLink to='/home' exact>主页</NavLink>
          <NavLink to='/goods'>商品管理</NavLink>
        </div>
        <div className='pull-right'>
          <div className='header-info'>
            欢迎您，{localStorage.getItem('username')}
            <span style={{marginLeft: 10}}>|</span>
            <a className='logout' onClick={this.onLogout}>退出</a>
          </div>
        </div>
      </header>
    )
  }
}
