// UserHomePage.jsx
import React from 'react';
import { useState } from 'react';
import Calender from '../components/calender/calender';
import UserProfileHeader from '../components/userProfileHeader.jsx';
import NotificationMessage from '../components/notifications/notificationMessage.jsx';

//Might add a "Goddag, <user>" here later on
function UserProfile() {
  
  return (
    <div>
      <UserProfileHeader />
      <div className="grid-container">
        <section className="notification-styling">
          <h1 className="bg-primary text-white text-xl p-4 rounded-lg">
            Notifikationer
          </h1>
          <div>
            <NotificationMessage />
          </div>
        </section>
        <Calender />
        <footer className="footer footer-styling">
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
      
    </div>
  );
}

export default UserProfile;
