import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/homepage.jsx';
import reportWebVitals from './reportWebVitals';
import UserProfile from "./pages/userProfile.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProfile />
    <HomePage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
