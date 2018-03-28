import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Home from './containers/home'

const Routes = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute  component={Dashboard}/>
        </Route>
      </Router>
    </div>
  );
};

export default Routes;
