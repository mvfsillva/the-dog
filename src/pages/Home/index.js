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
  font-family: ${props => props.theme.fonts.primary};
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`

const Home = () => (
  <Wrapper>
    <Header headline="the iddog" uppercase />
    <Signup />
  </Wrapper>
)

export default Home
