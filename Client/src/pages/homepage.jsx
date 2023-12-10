import React from 'react';
import CreateUserForm from '../components/forms/CreateUserForm';
import backgroundImage from '../assets/homePagePicture.jpg';
import logoImage from '../assets/logo.jpg';
import '../styles/index.css';

function HomePage() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className='home-page-container'>
          <img src={logoImage} alt="" className="logo-styling rounded-full mx-auto" />
        <div className="max-w-md mx-auto">
          <CreateUserForm />
        </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
