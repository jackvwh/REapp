// UserProfilePage.jsx
import React from 'react';
import UserProfileDetails from '../Components/userProfileDetails.jsx';
import UserProfileHeader from '../Components/userProfileHeader.jsx';
import '../Styles/index.css';

//TODO: we need this to not load before the SQL call is complete, it is making the view act weird like 50% of the time.
function UserProfile() {
  return (
    <div>
      <UserProfileHeader />
      <UserProfileDetails />
    </div>
  );
}

export default UserProfile;
