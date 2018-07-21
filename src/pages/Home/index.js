import React, { Fragment } from 'react'

import Header from 'components/Header'
import Spinner from 'components/Spinner'

const Home = () => (
  <Fragment>
    <Header headline="Welcome the Dog world!" />
    <Spinner />
  </Fragment>
)

export default Home
