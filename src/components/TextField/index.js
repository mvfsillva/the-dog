import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { transitions } from 'polished'
import { transition } from '../../mixins/style.transtion'
import If from 'components/common/If'

const StyledInput = styled.input`
  background-color: transparent;
  border: 0;
  padding: 3px 0;
  width: 100%;
  margin: 5px;
  border-bottom: 1px solid ${props => props.theme.colors.gray['300']};
  outline: snow;
  font-size: 1.5rem;
  text-transform: ${props => (props.lowercase ? 'lowercase' : 'capitalize')};

  &:hover {
    border-bottom-color: ${props => props.theme.colors.gray['500']};
  }

  &:focus {
    border-bottom-color: ${props => props.theme.colors.primary.default};
  }

  &::placeholder {
    color: ${props => props.theme.colors.gray['600']};
  }

  ${transitions(
    transition({ property: 'border-color' }),
    transition({ property: 'padding-left' }),
  )};
`

const StyledLabel = styled.label`
  color: ${props => props.theme.colors.gray['700']};
  font-size: 2rem;
  line-height: 2em;
  margin: 5px;
`

const Wrapper = styled.div`
  margin-bottom: 5rem;
  label {
    vertical-align: middle;
  }
`
const TextField = ({ name, label, type, ...props }) => {
  return (
    <Wrapper>
      <If test={label}>
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
      </If>
      <StyledInput id={name} name={name} type={type} {...props} />
    </Wrapper>
  )
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  lowercase: PropTypes.bool,
}

export default TextField
