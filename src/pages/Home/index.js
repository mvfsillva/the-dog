import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import serializeForm from 'form-serialize'
import { Wrapper } from '~/styles/Wrapper'
import Content from '~/styles/Content'
import authService from '~/services/auth'
import userService from '~/services/user'
import Signup from '~/containers/Signup'
import Header from '~/components/Header'
import loading from '~/components/loading'

class Home extends Component {
  constructor(props) {
    super(props)
    const isAuthenticated = authService.isAuthenticated()
    this.state = {
      isCredentialsError: false,
      hasError: false,
      isAuthenticated,
    }
  }

  login = async data => {
    const { email } = data
    await userService.login(email).then(({ user, error }) => {
      return error ? this.loginError(error) : this.loginSuccess(data, user.token)
    })
  }

  loginSuccess = async (data, token) => {
    localStorage.setItem('token', token)
    userService.saveUser(data)
    this.setState({ isAuthenticated: true, isCredentialsError: false })
  }

  loginError = isCredentialsError =>
    this.setState({
      isCredentialsError,
      hasError: true,
    })

  handleSubmit = e => {
    e.preventDefault()
    const data = serializeForm(e.target, { hash: true })
    this.login(data)
  }

  render() {
    const { hasError, isAuthenticated } = this.state
    const { from = { pathname: '/feed' } } = this.props.location.state || {}

    if (isAuthenticated) return <Redirect to={from} />

    return (
      <Wrapper>
        <Content>
          <Header headline="the iddog" uppercase hero />
        </Content>
        <Signup handleSubmit={this.handleSubmit} error={hasError} />
      </Wrapper>
    )
  }
}

export default loading(Home)
