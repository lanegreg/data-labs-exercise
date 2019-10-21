import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { HomePage, ProfilePage, AccountPage } from '../components'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/account" component={AccountPage} />
    </Switch>
  </Router>
)

export default Routes
