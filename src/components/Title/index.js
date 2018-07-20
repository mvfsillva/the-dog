import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ size: Size, color, ...props }) => <Size {...props} />

Title.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string,
}

Title.defaultProps = {
  size: 'h1',
  color: 'grayscale',
}

export default Title
