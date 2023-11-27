// UserProfilePage.jsx
import React from 'react';
import UserProfileDetails from '../components/userProfileDetails.jsx';
import UserProfileHeader from '../components/userProfileHeader.jsx';

function UserProfile() {
  return (
    <div>
      <UserProfileHeader />
      <UserProfileDetails />
    </div>
  );
}

export default UserProfile;
