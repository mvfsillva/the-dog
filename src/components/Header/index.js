import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Title from 'components/Title'
import If from 'components/common/If'

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = ({ id, className, headline, subtitle }) => (
  <HeaderStyled id={id} className={className}>
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
}

Header.defaultProps = {
  id: null,
  className: null,
  subtitle: null,
}

export { HeaderStyled }
export default Header
