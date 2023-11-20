// UserProfilePage.jsx
import React from 'react';
import UserProfileDetails from '../components/userProfileDetails';
import UserProfileHeader from '../components/userProfileHeader';

function UserProfile() {
  return (
    <div>
      <UserProfileHeader />
        <UserProfileDetails />
    
    </div>
  );
}

export default UserProfile;
