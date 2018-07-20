import React, { Fragment } from 'react'

import Header from 'components/Header'
import TextField from 'components/TextField'

const Home = () => (
  <Fragment>
    <Header headline="Welcome the Dog world!" />
    <TextField name="test" label="Testando" type="text" />
    <TextField name="email" label="E-mail" type="text" required />
  </Fragment>
)

export default Home
