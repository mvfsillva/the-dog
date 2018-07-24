import React, { Component } from 'react'
import { Redirect } from 'react-router'

import Header from '~/components/Header'
import Navigation from '~/components/Navigation'
import Spinner from '~/components/Spinner'
import Card from '~/components/Card'
import Modal from '~/components/Modal'
import If from '~/components/common/If'

import { HeaderWrapper } from '~/styles/Wrapper'
import Content from '~/styles/Content'
import ImageRender from '~/styles/ImageRender'

import feedService from '~/services/feed'
import userService from '~/services/user'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isLoading: true,
      isAuthenticated: true,
      activeFilter: '?category=husky',
    }
  }

  componentDidMount() {
    this.getFeed()
  }

  getFeed = async () => {
    const token = localStorage.getItem('token')
    const { activeFilter } = this.state

    if (!token) {
      return this.setState({ isAuthenticated: false, isLoading: false })
    }

    return await feedService.list(token, activeFilter).then(data => {
      this.props.history.push('/feed')
      this.setState({ data, isAuthenticated: true, isLoading: false })
    })
  }

  handleCategory = async breed => {
    await this.setState({
      activeFilter: `?category=${breed}`,
      isLoading: true,
    })
    this.getFeed()
  }

  handleCloseModal = () => this.props.history.push('/feed')

  handleSignout = () => {
    console.log('cliquei')
    userService.signout()
    this.props.history.push('/')
  }

  render() {
    const { data, isLoading, isAuthenticated } = this.state
    const { id, url } = this.props.location.state || {}

    if (!isAuthenticated) return <Redirect to="/" />

    return (
      <HeaderWrapper>
        <Content>
          <Header headline={userService.get('name')} uppercase hero />
          <Navigation handleCategory={this.handleCategory} handleSignout={this.handleSignout} />
        </Content>
        <Content>
          <Header subtitle={data.category} />
        </Content>
        <If test={isLoading}>
          <Spinner />
        </If>
        <If test={!isLoading}>
          <Card data={data} />
          <Modal open={!!id} closeable onClose={this.handleCloseModal}>
            <ImageRender image={url} width={620} height={460} />
          </Modal>
        </If>
      </HeaderWrapper>
    )
  }
}

export default Feed
