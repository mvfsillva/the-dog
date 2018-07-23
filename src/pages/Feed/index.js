import React, { Component } from 'react'
import { Redirect } from 'react-router'
import Header from '@components/Header'
import Navigation from '@components/Navigation'
import Spinner from '@components/Spinner'
import Card from '@components/Card'
import If from '@components/common/If'
import { HeaderWrapper } from '~/styles/Wrapper'
import Content from '~/styles/Content'

import feedService from '~/services/feed'
import userService from '~/services/user'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isLoading: true,
      isAuthenticated: true,
    }
  }

  componentDidMount() {
    this.getFeed()
  }

  getFeed = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      return this.setState({ isAuthenticated: false, isLoading: false })
    }
    return await feedService.list(token).then(({ list }) => {
      this.props.history.push('/feed')
      this.setState({ data: list, isAuthenticated: true, isLoading: false })
    })
  }

  getUser = () => {}

  render() {
    const { data, isLoading, isAuthenticated } = this.state

    if (!isAuthenticated) return <Redirect to="/" />

    return (
      <HeaderWrapper>
        <Content>
          <Header headline={userService.get('name')} uppercase />
          <Navigation />
        </Content>
        <If test={isLoading}>
          <Spinner />
        </If>
        <Card data={data} />
      </HeaderWrapper>
    )
  }
}

export default Feed
