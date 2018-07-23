import React from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import { Home, Feed, NotFound } from '@pages'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute exact path="/feed" component={Feed} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default withRouter(Routes)
