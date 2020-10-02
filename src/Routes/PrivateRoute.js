import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userDetails = JSON.parse(localStorage.getItem('userInfo')) || {};
  const isLoggedIn = () => {
    if (Object.keys(userDetails).length) {
      return true;
    }
    return false;
  };
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
