// UserHomePage.jsx
import React from 'react';
import Calender from '../components/calender/calender';
import UserProfileHeader from '../components/userProfileHeader.jsx';


function UserProfile() {
  return (
    <div>
      <UserProfileHeader />
      <Calender />
      

    </div>
  );
}

export default UserProfile;
