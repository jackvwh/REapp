import React from 'react';

import { Route, Redirect, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


const ProtectedRoute = ({children}) => {
  const [cookies] =useCookies(['token']);
  const isAuthenticated = cookies.token;

  if(!isAuthenticated){
    console.log('you are not authorized');
    return <Navigate to="/"/>;
  }
  
  return children;
};





// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const isAuthenticated = localStorage.getItem('Token'); //replace with your auth
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
//       }
//     />
//   );
// };

export default ProtectedRoute;
