import React from 'react'

import { Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  
  const isLoggedIn = localStorage.getItem('userData');
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : window.location.replace("/")
      }
    />
  )
}

export default PrivateRoute