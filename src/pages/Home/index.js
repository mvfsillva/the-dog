import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import serializeForm from 'form-serialize'

import Header from '@components/Header'
import Signup from '@templates/Signup'

import { Wrapper } from '~/styles/Wrapper'
import Content from '~/styles/Content'

import authService from '~/services/auth'
import userService from '~/services/signup'

class Home extends Component {
  constructor(props) {
    super(props)
    const isAuthenticated = authService.isAuthenticated()
    this.state = {
      isLoading: false,
      isCredentialsError: false,
      isAuthenticated,
    }
  }

  login = data => {
    const { email } = data
    userService.login(email).then(({ user, error }) => {
      this.setState({ isLoading: true })
      return error ? this.loginError(error) : this.loginSuccess(data, user.token)
    })
  }

  loginSuccess = (data, token) => {
    this.setState({ isAuthenticated: true, isLoading: false, isCredentialsError: false })
    localStorage.setItem('token', token)
    userService.saveUser(data)
  }

  loginError = isCredentialsError =>
    this.setState({
      isCredentialsError,
      isLoading: false,
    })

  handleSubmit = e => {
    e.preventDefault()
    const data = serializeForm(e.target, { hash: true })
    this.login(data)
  }

  render() {
    const { isLoading, isAuthenticated } = this.state
    const { from = { pathname: '/feed' } } = this.props.location.state || {}

    if (isAuthenticated) return <Redirect to={from} />

    return (
      <Wrapper>
        <Content>
          <Header headline="the iddog" uppercase />
        </Content>
        <Signup handleSubmit={this.handleSubmit} />
      </Wrapper>
    )
  }
}

export default Home
