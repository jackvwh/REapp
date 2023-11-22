import React, { useState } from 'react';
import '../stylesheets/userProfile.css';

function UserProfileDetails() {
  const [userData, setUserData] = useState({
    image: '',
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    birthdate: '',
    about: '',
  });

  const [interests, setInterests] = useState([]);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
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

  const saveChanges = () => {
    console.log('Saving changes:', userData);
    closeModal(); 
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <div className="containerStyle">
              <h2 className="h2Style">Brugerprofil</h2>
              <form>
                <label className="labelStyle">Billede</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <img src={userData.image} alt="" className="imgStyle" />

                <label className="labelStyle">Brugernavn:</label>
                <input
                  type="text"
                  name="UserName"
                  value={userData.userName}
                  onChange={handleInputChange}
                />

                <label className="labelStyle">Førstenavn:</label>
                <input
                  type="text"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleInputChange}
                />

                 <label className="labelStyle">Efternavn:</label>
                <input
                  type="text"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleInputChange}
                />

                <label className="labelStyle">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                />

                <label className="labelStyle">Alder:</label>
                <input
                  type="date"
                  name="birthdate"
                  value={userData.birthdate}
                  onChange={handleInputChange}
                />

                <label className="labelStyle">Interesser:</label>
                <select
                name="interests"
                value={userData.interests}
                onChange={handleInputChange}
>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                </select>


                <label className="labelStyle">Om:</label>
                <textarea
                  name="about"
                  value={userData.about}
                  onChange={handleInputChange}
                  className="textAreaStyle"
                />
                <button className="button" onClick={saveChanges}>
                  Save Changes
                </button>
                <button className="button" onClick={closeModal}>
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Display mode */}
      <div className="display-mode">
        <h2 className="h2Style">Brugerprofil</h2>
        <div className="grid-container">
    <div className="grid-item">
      <img className="imgTest" src="/test.png" alt="user" />
    </div>
    <div className="grid-item">
      <p className="item-title">Brugernavn:</p>
      <p>{userData.userName}</p>
    </div>
    <div className="grid-item">
      <p className="item-title">Førstenavn:</p>
      <p>{userData.firstName}</p>
    </div>
    <div className="grid-item">
      <p className="item-title">Efternavn:</p>
      <p>{userData.lastName}</p>
    </div>
    <div className="grid-item">
      <p className="item-title">Email:</p>
      <p>{userData.email}</p>
    </div>
    <div className="grid-item">
      <p className="item-title">Alder:</p>
      <p>{userData.birthdate}</p>
    </div>
    <div className="grid-item">
      <p className="item-title">Interesser:</p>
      <p>{userData.interests}</p>
    </div>
    <div className="grid-item">
      <p className="item-title">Om:</p>
      <p>{userData.about}</p>
    </div>
    <div>
      <button className="button" onClick={openModal}>
        Edit Profile
      </button>
      </div>
    </div>
  </div>
</div>
  );
}

export default UserProfileDetails;


