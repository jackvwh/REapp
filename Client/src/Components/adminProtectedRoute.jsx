import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { jwtDecode } from 'jwt-decode';

const AdminProtectedRoute = ({ children }) => {
  const [cookies] = useCookies(['token']);
  const token = cookies.token;

  let isAdmin = false;
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      isAdmin = decodedToken.privilege === 2;
    } catch (error) {
      console.error('Error decoding token:', error);
      // Token is invalid or expired
    }
  }

  if (!token || !isAdmin) {
    console.log('You are not authorized as an admin');
    return <Navigate to="/userpage" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
