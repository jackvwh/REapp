import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import homeIcon from '../assets/homeIcon.svg';
import profileIcon from '../assets/profileIcon.svg';

function UserProfileHeader() {
  return (
    <div className="navbar bg-sky-500/50 p-2 flex justify-between items-center">
      <img className="w-20" src={logoImage} alt="reapp-logo" />
      <div className="flex justify-center items-center space-x-10">
        <div className='flex justify-center items-center'>
          <img className="w-8" src={homeIcon} alt="" />
          <Link to="/userpage" className="btn btn-ghost text-xl mx-2 m-0 p-0">Home</Link>
        </div>
        <div className='flex justify-center items-center'>
        <img className="w-9" src={profileIcon} alt="" />
        <Link to="/profile" className="btn btn-ghost text-xl mx-2 m-0 p-0">Profil</Link>
        </div>
      </div>
      <button className="btn btn-ghost text-xl mx-2">Log Ud</button>
    </div>
  );
}

export default UserProfileHeader;
