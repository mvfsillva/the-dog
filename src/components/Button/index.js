import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { transitions } from 'polished'
import { transition } from '@mixins/transition'

const fontSize = ({ height }) => `${height / 40}rem`

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  padding: 15px 50px;
  border-radius: 0.125em;
  box-sizing: border-box;
  cursor: pointer;
  background-color: ${props => (props.outlined ? 'transparent' : props.theme.colors.gray.default)};
  color: ${props => (props.outlined ? props.theme.colors.gray.default : props.theme.colors.white)};
  font-size: ${fontSize};
  font-family: ${props => props.theme.fonts.primary};
  letter-spacing: 3px;
  line-height: 20px;
  ${transitions(transition({ property: 'background-color', duration: '250ms' }))};
  ${transitions(transition({ property: 'border-color', duration: '250ms' }))};

  &:hover,
  &:focus,
  &:active {
    background-color: ${props =>
      props.outlined ? props.theme.colors.gray.default : 'transparent'};
    color: ${props =>
      props.outlined ? props.theme.colors.white : props.theme.colors.gray.default};
  }

  &:focus {
    outline: none;
  }
`

const Button = ({ type, ...props }) => <StyledButton type={type} {...props} />

Button.propTypes = {
  outlined: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
  height: 40,
}

export default Button
