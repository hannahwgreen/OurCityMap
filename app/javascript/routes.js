import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import HomeContainer from './containers/HomeContainer'
import PhotoFormContainer from './containers/PhotoFormContainer'

const Routes = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={HomeContainer}/>
          <Route path='/photos/new' component={PhotoFormContainer}/>
        </Route>
      </Router>
    </div>
  );
};

export default Routes;
