import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import HomeContainer from './containers/HomeContainer'


const Routes = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={HomeContainer}/>
        </Route>
      </Router>
    </div>
  );
};

export default Routes;
