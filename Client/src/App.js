import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage.jsx';
import AdminPage from './pages/adminpage.jsx';
import UserProfile from './pages/userProfile.jsx';
import AIprofilepage from './pages/aiProfilepage.jsx';
import AIfrontpage from './pages/aiFrontpage.jsx';
import AIadminpage from './pages/aiAdminpage.jsx';
import UserPage from './pages/userHomePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/Userpage" element={<UserPage />} />
        <Route path="/notadminpage" element={<AdminPage />} />
        <Route path="/ai/profilepage" element={<AIprofilepage />} />
        <Route path="/ai/frontpage/" element={<AIfrontpage />} />
        <Route path="/ai/adminpage" element={<AIadminpage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
