import React from 'react';
import '../styles/index.css';

function UserProfileHeader() {
  return (
    <header className="user-profile-header">
      <h1>REapp</h1>
      <div className="button-container">
        <button className="button">Ressoucer</button>
        <button className="button">Forside</button>
        <button className="button">Fællesskab</button>
      </div>
    </header>
  );
}

export default UserProfileHeader;
