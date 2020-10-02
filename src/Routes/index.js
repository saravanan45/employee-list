import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from '../components/Login';
import List from '../components/List';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/list" component={List} />
      </Switch>
    </Router>
  );
};

export default Routes;
