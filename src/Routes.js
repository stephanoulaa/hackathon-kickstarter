import React from 'react'
import Router from 'react-router-dom/Router'
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import createHistory from 'history/createBrowserHistory';


import Home from './pages/home';
import Project from './pages/project';

export const history = createHistory()
const Routes = () => (
  <Router history={history}>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/:project' component={Project} />
      </Switch>
  </Router>
)

export default Routes
