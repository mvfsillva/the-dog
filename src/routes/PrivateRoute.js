import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import authService from '~/services/auth'

const PrivateRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={props =>
      authService.isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
)

export default PrivateRoute
