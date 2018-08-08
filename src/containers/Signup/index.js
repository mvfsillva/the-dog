import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import TextField from '~/components/TextField'
import Button from '~/components/Button'

const Content = styled.section`
  width: 100%;
  max-width: 834px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`

const Signup = ({ handleSubmit, error }) => (
  <Content>
    <form onSubmit={e => handleSubmit(e)}>
      <TextField type="text" name="name" label="Seu Nome" required />
      <TextField type="text" name="email" label="E-mail" lowercase invalid={error} required />
      <Button type="submit" outlined>
        Entrar
      </Button>
    </form>
  </Content>
)

Signup.propTypes = {
  handleSubmit: PropTypes.func,
  error: PropTypes.bool,
}

export default Signup
