import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import HomePage from './pages/homepage.jsx';
import NotificationForm from './components/forms/notification';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />

    <NotificationForm />
  </React.StrictMode>
);
