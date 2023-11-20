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

const radioLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '5px',
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

  const handleDependencesChange = (e) => {
    const { value } = e.target;
    setUserData({ ...userData, dependences: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({ ...userData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={h2Style}>Brugerprofil</h2>
      <form>
        <label style={labelStyle}>Billede</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={inputStyle}
        />
        <img src={userData.image} alt="user" style={imgStyle} />

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
        <label style={radioLabelStyle}>
          <input
            type="radio"
            name="dependences"
            value="Alkohol"
            checked={userData.dependences === 'Alkohol'}
            onChange={handleDependencesChange}
            style={radioStyle}
          />
          Alkohol
        </label>

        <label style={radioLabelStyle}>
          <input
            type="radio"
            name="dependences"
            value="Cigaretter"
            checked={userData.dependences === 'Cigaretter'}
            onChange={handleDependencesChange}
            style={radioStyle}
          />
          Cigaretter
        </label>

        <label style={radioLabelStyle}>
          <input
            type="radio"
            name="dependences"
            value="kaffein"
            checked={userData.dependences === 'kaffein'}
            onChange={handleDependencesChange}
            style={radioStyle}
          />
          Kaffein
        </label>

        <label style={radioLabelStyle}>
          <input
            type="radio"
            name="dependences"
            value="lim"
            checked={userData.dependences === 'lim'}
            onChange={handleDependencesChange}
            style={radioStyle}
          />
          Lim
        </label>
      </form>
    </div>
  );
}

export default UserProfileDetails;
