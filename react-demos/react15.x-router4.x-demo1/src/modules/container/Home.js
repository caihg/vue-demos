import React, { Component } from 'react'
import logo from '../../assets/logo.svg'

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <img src={logo} className='logo' alt='logo' />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

export default Home
