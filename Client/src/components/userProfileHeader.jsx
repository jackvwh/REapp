import React from 'react';
import '../stylesheets/userProfile.css';

function UserProfileHeader() {
  return (
    <header className="user-profile-header">
      <h1>REapp</h1>
      <div className="button-container">
        <button class="button">Ressoucer</button>
        <button class="button">Forside</button>
        <button class="button">Fællesskab</button>
      </div>
    </header>
  );
}

export default UserProfileHeader;
