import React, { Fragment } from 'react'

import Header from 'components/Header'
import TextField from 'components/TextField'
import Modal from 'components/Modal'

const Home = () => (
  <Fragment>
    <Header headline="Welcome the Dog world!" />
    <TextField name="test" label="Testando" type="text" />
    <TextField name="email" label="E-mail" type="text" required />
    <Modal size="small" open closeable onClose={e => e}>
      <img src="https://dog.ceo/api/img/pug/n02110958_10.jpg" />
    </Modal>
  </Fragment>
)

export default Home
