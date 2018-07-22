import React, { Component } from 'React'

import Header from '@components/Header'
import Navigation from '@components/Navigation'

import { HeaderWrapper } from '~/styles/Wrapper'
import Content from '~/styles/Content'

class Feed extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Content>
          <Header headline="the iddog" uppercase />
          <Navigation />
        </Content>
      </HeaderWrapper>
    )
  }
}

export default Feed
