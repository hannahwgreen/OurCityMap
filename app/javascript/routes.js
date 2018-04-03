import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import HomeContainer from './containers/HomeContainer'
import PhotoShowContainer from './containers/PhotoShowContainer'

const Routes = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={HomeContainer}/>
          <Route path='/photos/:id' component={PhotoShowContainer} />
        </Route>
      </Router>
    </div>
  );
};

export default Routes;
