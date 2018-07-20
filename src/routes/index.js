import React from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'

import { Home, NotFound } from 'pages'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

export default withRouter(Routes)
