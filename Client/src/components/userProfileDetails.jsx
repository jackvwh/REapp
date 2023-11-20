// UserProfileDetails.jsx
import React, { useState } from 'react';

function UserProfileDetails() {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    age: '',
    interests: '',
    hobbies: '',
    about: '',
    dependences: '', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleAfhaengighedChange = (e) => {
    const { value } = e.target;
    setUserData({ ...userData, dependences: value });
  };

  return (
    <div>
      <h2>Brugerprofil</h2>
      <form>
        <label>Fuldnavn:</label>
        <input
          type="text"
          name="fullName"
          value={userData.fullName}
          onChange={handleInputChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />

        <label>Alder:</label>
        <input
          type="text"
          name="age"
          value={userData.age}
          onChange={handleInputChange}
        />

        <label>Interesser & hobby:</label>
        <input
          type="text"
          name="interests"
          value={userData.interests}
          onChange={handleInputChange}
        />


        <label>Om:</label>
        <textarea
          name="about"
          value={userData.about}
          onChange={handleInputChange}
        />

        <label>Afhængighed:</label>
        <input
          type="radio"
          name="afhaengighed"
          value="Alkohol" 
          checked={userData.afhaengighed === "Option 1"} 
          onChange={handleAfhaengighedChange}
        />

        <input
          type="radio"
          name="afhaengighed"
          value="Cigaretter" 
          checked={userData.afhaengighed === "Option 2"} 
          onChange={handleAfhaengighedChange}
        />

        <input
            type="radio"
            name="afhaengighed"
            value="kaffein" 
            checked={userData.afhaengighed === "Option 3"} 
            onChange={handleAfhaengighedChange}
        />

        <input
            type="radio"
            name="afhaengighed"
            value="lim" 
            checked={userData.afhaengighed === "Option 3"} 
            onChange={handleAfhaengighedChange}
        />
      </form>
    </div>
  );
}

export default UserProfileDetails;
