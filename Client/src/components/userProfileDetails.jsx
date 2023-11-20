import React, { useState } from 'react';

const containerStyle = {
  maxWidth: '600px',
  margin: 'auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const h2Style = {
  color: '#333',
};

const imgStyle = {
  display: 'block',
  margin: '10px 0',
  width: '100px',
  height: '100px',
};

const labelStyle = {
  display: 'block',
  marginTop: '10px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginTop: '5px',
  marginBottom: '10px',
  boxSizing: 'border-box',
};

const textareaStyle = {
  width: '100%',
  padding: '8px',
  marginTop: '5px',
  marginBottom: '10px',
  boxSizing: 'border-box',
};

const radioStyle = {
  marginRight: '5px',
};

function UserProfileDetails() {
  const [userData, setUserData] = useState({
    image: '',
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
    <div style={containerStyle}>
      <h2 style={h2Style}>Brugerprofil</h2>
      <form>
        <label style={labelStyle}>Billede</label>
        <img
          src={userData.image}
          alt="user"
          style={imgStyle}
        />

        <label style={labelStyle}>Navn:</label>
        <input
          type="text"
          name="fullName"
          value={userData.fullName}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Alder:</label>
        <input
          type="text"
          name="age"
          value={userData.age}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Interesser & hobby:</label>
        <input
          type="text"
          name="interests"
          value={userData.interests}
          onChange={handleInputChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Om:</label>
        <textarea
          name="about"
          value={userData.about}
          onChange={handleInputChange}
          style={textareaStyle}
        />

        <label style={labelStyle}>Afhængighed:</label>
        <input
          type="radio"
          name="afhaengighed"
          value="Alkohol"
          checked={userData.afhaengighed === 'Option 1'}
          onChange={handleAfhaengighedChange}
          style={radioStyle}
        />

        <input
          type="radio"
          name="afhaengighed"
          value="Cigaretter"
          checked={userData.afhaengighed === 'Option 2'}
          onChange={handleAfhaengighedChange}
          style={radioStyle}
        />

        <input
          type="radio"
          name="afhaengighed"
          value="kaffein"
          checked={userData.afhaengighed === 'Option 3'}
          onChange={handleAfhaengighedChange}
          style={radioStyle}
        />

        <input
          type="radio"
          name="afhaengighed"
          value="lim"
          checked={userData.afhaengighed === 'Option 3'}
          onChange={handleAfhaengighedChange}
          style={radioStyle}
        />
      </form>
    </div>
  );
}

export default UserProfileDetails;
