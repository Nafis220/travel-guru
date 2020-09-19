import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { traveler } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
 const [user,setUser] = useContext(traveler)

    return (
  
            
            <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) :
        user.name ? (
          children
        )
        
        : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
       
    );
};

export default PrivateRoute;