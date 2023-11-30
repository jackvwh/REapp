import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage.jsx';
import UserPage from './pages/userpage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userpage" element={<UserPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
