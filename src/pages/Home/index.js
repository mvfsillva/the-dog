import React from 'react'
import styled from 'styled-components'
import Header from 'components/Header'
import Signup from 'templates/Signup'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;
  justify-content: center;
  align-self: center;
  font-family: ${props => props.theme.fonts.primary};
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 3rem;
`

const Home = () => (
  <Wrapper>
    <Content>
      <Header headline="the iddog" uppercase />
    </Content>
    <Signup />
  </Wrapper>
)

export default Home
