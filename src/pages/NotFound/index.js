import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Title from '@components/Title'
import Button from '@components/Button'
import FullContainer from '~/styles/FullContainer'

import Bowl from './assets/Bowl'

const StyledTitle = styled(Title)`
  color: ${props => props.theme.colors.gray.default};
  font-family: ${props => props.theme.fonts.primary};
  font-weight: 300;
  line-height: 60px;
  letter-spacing: 3px;
`
const NotFound = ({ handleclick }) => (
  <FullContainer>
    <Bowl />
    <StyledTitle size="h2">Desculpe, mas essa página não existe.</StyledTitle>
    <Button onClick={e => (handleclick ? handleclick(e) : window.location.replace('/'))} outlined>
      Voltar para o inicio
    </Button>
  </FullContainer>
)

NotFound.propTypes = {
  handleclick: PropTypes.func,
}

NotFound.defaultProps = {
  handleclick: null,
}

export default NotFound
