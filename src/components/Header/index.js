import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Title from '@components/Title'
import If from '@components/common/If'

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  font-weight: 600;
  border: ${props => (props.hero ? '5px solid' : 'none')};
  padding: 10px 0;
  letter-spacing: 5px;
  line-height: 40px;
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'capitalize')};
  color: ${props => props.theme.colors.gray.default};

  .thedog {
    text-align: center;
    font-size: 24px;
    word-wrap: break-word;
    width: 140px;
    margin: 10px;
  }
`

const Header = ({ id, className, headline, subtitle, ...props }) => (
  <HeaderStyled id={id} className={className} {...props}>
    <Title className="thedog" size="h1">
      {headline}
    </Title>
    <If test={subtitle}>
      <Title size="h2">{subtitle}</Title>
    </If>
  </HeaderStyled>
)

Header.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  headline: PropTypes.node,
  subtitle: PropTypes.node,
  uppercase: PropTypes.bool,
  hero: PropTypes.bool,
}

Header.defaultProps = {
  id: null,
  className: null,
  subtitle: null,
  uppercase: false,
  hero: false,
}

export { HeaderStyled }
export default Header
