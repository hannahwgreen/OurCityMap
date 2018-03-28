import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import MapContainer from './containers/MapContainer'


const Routes = props => {
  return(
    <div>
      <Router history={browserHistory}>
        <Route path='/'>
          <IndexRoute component={MapContainer}/>
        </Route>
      </Router>
    </div>
  );
};

export default Routes;
