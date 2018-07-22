import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TextField from 'components/TextField'
import Button from 'components/Button'

const Content = styled.section`
  width: 100%;
  max-width: 920px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`

const Signup = ({ handleclick }) => (
  <Content>
    <form onSubmit={e => console.log(e)}>
      <TextField type="text" name="name" label="Seu Nome" />
      <TextField type="email" name="email" label="E-mail" lowercase />
      <Button onClick={handleclick} outlined>
        Entrar
      </Button>
    </form>
  </Content>
)

Signup.propTypes = {
  handleclick: PropTypes.func,
}

export default Signup
