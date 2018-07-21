import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Lottie from 'react-lottie'

import * as animation from './assets/spinner.json'

const StyledLottie = styled.div`
  position: relative;
  top: -40%;
  margin: auto;
`

const Spinner = ({ width, height, loop, autoplay, animation }) => (
  <StyledLottie>
    <Lottie options={{ animationData: animation, loop, autoplay }} height={height} width={width} />
  </StyledLottie>
)

Spinner.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  loop: PropTypes.bool,
  autoplay: PropTypes.bool,
  animation: PropTypes.object,
}

Spinner.defaultProps = {
  width: 200,
  height: 100,
  loop: true,
  autoplay: true,
  animation: animation,
}

export default Spinner
