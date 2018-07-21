import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Title from 'components/Title'
import If from 'components/common/If'

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'capitalize')};
  color: ${props => props.theme.colors.gray.default};
`

const Header = ({ id, className, headline, subtitle, ...props }) => (
  <HeaderStyled id={id} className={className} {...props}>
    <Title size="h1">{headline}</Title>
    <If test={subtitle}>
      <Title size="h2">{subtitle}</Title>
    </If>
  </HeaderStyled>
)

Header.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  headline: PropTypes.node.isRequired,
  subtitle: PropTypes.node,
  uppercase: PropTypes.bool,
}

Header.defaultProps = {
  id: null,
  className: null,
  subtitle: null,
  uppercase: false,
}

export { HeaderStyled }
export default Header
