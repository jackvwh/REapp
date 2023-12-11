import React from 'react';
import CreateUserForm from '../components/forms/CreateUserForm';
import backgroundImage from '../assets/homePagePicture.jpg';
import logoImage from '../assets/logo.png';
import loveIcon from '../assets/love.png';
import supportIcon from '../assets/support.png';
import taskIcon from '../assets/task.png';
import '../Styles/index.css';

function HomePage() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="home-page-container">
          <div className='logo-icon-container join join-vertical'>
            <img
              src={logoImage}
              alt=""
              className="logo-styling rounded-full mx-auto join join-item"
            />
            <img src={loveIcon} alt="" className="icon-styling join-item" />
            <span className='icon-text'>Personlige Støtte</span>
            <img src={supportIcon} alt="" className="icon-styling join-item" />
            <span className='icon-text'>Fællesskab</span>
            <img src={taskIcon} alt="" className="icon-styling join-item" />
            <span className='icon-text'>Daglige Opgaver</span>
          </div>
          <div className="max-w-md mx-auto">
            <CreateUserForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
