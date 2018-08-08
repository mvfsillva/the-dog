import React, { Component } from 'react'
import { Redirect } from 'react-router'

import Header from '~/components/Header'
import Navigation from '~/components/Navigation'
import Card from '~/components/Card'
import Modal from '~/components/Modal'

import { HeaderWrapper } from '~/styles/Wrapper'
import Content from '~/styles/Content'
import ImageRender from '~/styles/ImageRender'

import feedService from '~/services/feed'
import userService from '~/services/user'
import loading from '~/components/Loading'

class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
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
      return this.setState({ isAuthenticated: false })
    }

    return await feedService.list(token, activeFilter).then(data => {
      this.props.history.push('/feed')
      this.setState({ data, isAuthenticated: true })
    })
  }

  handleCategory = async breed => {
    await this.setState({
      activeFilter: `?category=${breed}`,
    })
    this.getFeed()
  }

  handleCloseModal = () => this.props.history.push('/feed')

  handleSignout = () => {
    userService.signout()
    this.props.history.push('/')
  }

  render() {
    const { data, isAuthenticated } = this.state
    const { id, url } = this.props.location.state || {}

    console.log(data)

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
        <Card data={data} />
        <Modal open={!!id} closeable onClose={this.handleCloseModal}>
          <ImageRender image={url} width={620} height={460} />
        </Modal>
      </HeaderWrapper>
    )
  }
}

export default loading(Feed)
