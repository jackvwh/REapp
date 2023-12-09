// UserProfilePage.jsx
import React from 'react';
import UserProfileDetails from '../Components/userProfileDetails.jsx';
import UserProfileHeader from '../Components/userProfileHeader.jsx';
import '../Styles/index.css';

function UserProfile() {
  return (
    <div>
      <UserProfileHeader />
      <UserProfileDetails />
    </div>
  );
}

export default UserProfile;
