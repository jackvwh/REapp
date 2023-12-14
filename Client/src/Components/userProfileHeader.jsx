import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import homeIcon from '../assets/homeIcon.svg';
import profileIcon from '../assets/profileIcon.svg';

function UserProfileHeader() {
  const serverEndpoint =
    process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

  function handleLogout() {
    fetch(`${serverEndpoint}/user/logout`, {
      method: 'POST',
      credentials: 'include',
    })
      .then(response => {
        if (response.ok) {
          window.location.href = '/';
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <div className="navbar bg-sky-500/50 p-2 flex justify-between items-center">
      <img className="w-20" src={logoImage} alt="reapp-logo" />
      <div className="flex justify-center items-center space-x-10">
        <div className="flex justify-center items-center">
          <img className="w-8" src={homeIcon} alt="" />
          <Link to="/userpage" className="btn btn-ghost text-xl mx-2 m-0 p-0">
            Home
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-9" src={profileIcon} alt="" />
          <Link to="/userProfile" className="btn btn-ghost text-xl mx-2 m-0 p-0">
            Profil
          </Link>
        </div>
      </div>
      <button
        id="LogoutButton"
        className="btn btn-ghost text-xl mx-2"
        onClick={handleLogout}
      >
        Log Ud
      </button>
    </div>
  );
}

export default UserProfileHeader;
