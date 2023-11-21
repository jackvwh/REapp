import React, { useState } from 'react';
import '../stylesheets/userProfile.css';

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
    <div>
      <button class = "button" onClick={openModal}>Edit Profile</button>

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
                <img src={userData.image} alt="user" className="imgStyle" />

                <label className="labelStyle">Navn:</label>
                <input
                  type="text"
                  name="fullName"
                  value={userData.fullName}
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
                  type="text"
                  name="age"
                  value={userData.age}
                  onChange={handleInputChange}
                />

                <label className="labelStyle">Interesser & hobby:</label>
                <input
                  type="text"
                  name="interests"
                  value={userData.interests}
                  onChange={handleInputChange}
                />

                <label className="labelStyle">Om:</label>
                <textarea
                  name="about"
                  value={userData.about}
                  onChange={handleInputChange}
                  className="textAreaStyle"
                />

                <label className="labelStyle">Afhængighed:</label>
                <label className="radioLabelStyle">
                  <input
                    type="radio"
                    name="dependences"
                    value="Alkohol"
                    checked={userData.dependences === 'Alkohol'}
                    onChange={handleDependencesChange}
                    className="radioStyle"
                  />
                  Alkohol
                </label>

                <label className="radioLabelStyle">
                  <input
                    type="radio"
                    name="dependences"
                    value="Cigaretter"
                    checked={userData.dependences === 'Cigaretter'}
                    onChange={handleDependencesChange}
                    className="radioStyle"
                  />
                  Cigaretter
                </label>

                <label className="radioLabelStyle">
                  <input
                    type="radio"
                    name="dependences"
                    value="kaffein"
                    checked={userData.dependences === 'kaffein'}
                    onChange={handleDependencesChange}
                    className="radioStyle"
                  />
                  Kaffein
                </label>

                <label className="radioLabelStyle">
                  <input
                    type="radio"
                    name="dependences"
                    value="lim"
                    checked={userData.dependences === 'lim'}
                    onChange={handleDependencesChange}
                    className="radioStyle"
                  />
                  Lim
                </label>
              </form>
              <button class = "button" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfileDetails;

