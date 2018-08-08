import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Lottie from 'react-lottie'
import * as animation from './assets/spinner.json'

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Animation = ({ width, height, loop, autoplay, animation }) => (
  <Section>
    <Lottie options={{ animationData: animation, loop, autoplay }} height={height} width={width} />
  </Section>
)

Animation.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  loop: PropTypes.bool,
  autoplay: PropTypes.bool,
  animation: PropTypes.object,
}

Animation.defaultProps = {
  width: 600,
  height: 600,
  loop: true,
  autoplay: true,
  animation: animation,
}

export default Animation
