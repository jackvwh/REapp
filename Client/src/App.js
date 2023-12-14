import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import HomePage from './Pages/homepage.jsx';
import AdminPage from './Pages/adminpage.jsx';
import UserProfile from './Pages/userProfile.jsx';
import UserPage from './Pages/userHomePage.jsx';
import ProtectedRoute from './Components/protectedRoute.jsx';
import AdminProtectedRoute from './Components/adminProtectedRoute.jsx';

//TODO: make sure, you cant navigate to login through either url or buttons
function App() {
  return (
    <CookiesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/userpage"
            element={
              <ProtectedRoute>
                <UserPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/userProfile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notadminpage"
            element={
              <AdminProtectedRoute>
                <AdminPage />
              </AdminProtectedRoute>
            }
          />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </CookiesProvider>
  );
}

export default App;
