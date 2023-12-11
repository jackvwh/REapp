import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies(['token']);
  const isAuthenticated = cookies.token;

  if (!isAuthenticated) {
    console.log('you are not authorized');
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
