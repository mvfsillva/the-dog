import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { transitions } from 'polished'

import { transition } from '~/mixins/transition'
import If from '~/components/common/If'

const StyledInput = styled.input`
  background-color: transparent;
  border: 0;
  padding: 3px 0;
  width: 100%;
  margin: 5px;
  color: ${props => (props.invalid ? 'red' : props.theme.colors.gray['600'])};
  border-bottom: 1px solid ${props => (props.invalid ? 'red' : props.theme.colors.gray['500'])};
  outline: snow;
  font-size: 1.5rem;
  text-transform: ${props => (props.lowercase ? 'lowercase' : 'capitalize')};

  &:hover {
    border-bottom-color: ${props => props.theme.colors.gray['900']};
  }

  &:focus {
    border-bottom-color: ${props => props.theme.colors.gray['900']};
  }

  &::placeholder {
    color: ${props => props.theme.colors.gray['600']};
  }

  ${transitions(transition({ property: 'border-bottom-color' }))};
  ${transitions(transition({ property: 'color' }))};
`

const StyledLabel = styled.label`
  color: ${props => props.theme.colors.gray['500']};
  font-size: 1.4rem;
  letter-spacing: 5px;
  line-height: 40px;
  margin: 5px;
  font-weight: 300;

  input:focus + & {
    color: ${props => props.theme.colors.gray['900']};
  }

  input:hover + & {
    color: ${props => props.theme.colors.gray['900']};
  }

  ${transitions(transition({ property: 'color' }))};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 1.2rem;
  label {
    vertical-align: middle;
  }
`

const TextField = ({ name, label, type, ...props }) => {
  return (
    <Wrapper>
      <StyledInput id={name} name={name} type={type} {...props} />
      <If test={label}>
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
      </If>
    </Wrapper>
  )
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  lowercase: PropTypes.bool,
  invalid: PropTypes.bool,
}

TextField.defaultProps = {
  invalid: false,
}

export default TextField
