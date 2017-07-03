import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: localStorage.getItem('loggedIn'),
      username: 'anonymous',
      password: '123'
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({
      [name]: value
    })
  }

  onSubmit(event) {
    if (this.state.username && this.state.password) {
      localStorage.setItem('loggedIn', true)
      localStorage.setItem('username', this.state.username)
      this.setState({loggedIn: true})
      this.props.history.push('/home')
    }
  }

  render() {
    return (
      <div className='login-wrap'>
        <h2>登 录</h2>
        <div className='field-box'>
          <label className='control-label'>用户名：</label>
          <input type='text' name='username' value={this.state.username} onChange={this.onInputChange} />
        </div>
        <div className='field-box'>
          <label className='control-label'>密  码：</label>
          <input type='password' name='password' value={this.state.password} onChange={this.onInputChange} />
        </div>
        <div className='field-box'>
          <label className='control-label'></label>
          <button type='button' onClick={this.onSubmit}>登 录</button>
        </div>
      </div>
    )
  }
}
