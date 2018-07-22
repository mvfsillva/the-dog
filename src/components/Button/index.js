import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const fontSize = ({ height }) => `${height / 40}rem`

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  padding: 15px 50px;
  border-radius: 0.125em;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  background-color: ${props =>
    props.transparent ? 'transparent' : props.theme.colors.gray.default};
  color: ${props =>
    props.transparent ? props.theme.colors.gray.default : props.theme.colors.white};
  font-size: ${fontSize};
  font-family: ${props => props.theme.fonts.primary};
  letter-spacing: 3px;
  line-height: 20px;

  &:hover,
  &:focus,
  &:active {
    background-color: ${props =>
      props.transparent ? props.theme.colors.gray.default : 'transparent'};
    color: ${props =>
      props.transparent ? props.theme.colors.white : props.theme.colors.gray.default};
  }

  &:focus {
    outline: none;
  }
`

const Button = ({ type, ...props }) => <StyledButton type={type} {...props} />

Button.propTypes = {
  transparent: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
  height: 40,
}

export default Button
