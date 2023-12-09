import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/homepage.jsx';
import AdminPage from './Pages/adminpage.jsx';
import UserProfile from './Pages/userProfile.jsx';
import AIprofilepage from './Pages/aiProfilepage.jsx';
import AIfrontpage from './Pages/aiFrontpage.jsx';
import AIadminpage from './Pages/aiAdminpage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userpage" element={<UserProfile />} />
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
