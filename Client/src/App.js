import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage.jsx';
import AdminPage from './pages/adminpage.jsx';
import UserProfile from './pages/userProfile.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userpage" element={<UserProfile />} />
        <Route path="/notadminpage" element={<AdminPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
