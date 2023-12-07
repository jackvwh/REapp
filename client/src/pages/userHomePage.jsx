// UserHomePage.jsx
import React from 'react';
import Calender from '../components/calender/calender';
import UserProfileHeader from '../components/userProfileHeader.jsx';

//Might add a "Goddag, <user>" here later on

function UserProfile() {
  return (
    <div>
      <UserProfileHeader />
      <div className="grid-container">
        <section className="notification-styling">
          <h1>Notifikationer</h1>
        </section>
        <Calender />
        <footer className="footer-styling">Placeholder</footer>
      </div>
    </div>
  );
}

export default UserProfile;
