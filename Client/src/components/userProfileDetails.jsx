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
        <h2>User Profile</h2>
        <img class="imgTest" src="/test.png" alt="user" />
        <p>Navn: Abed {userData.fullName}</p>
        <p>Email: abdu4069@stud.kea.dk: {userData.email}</p>
        <p>Alder: 23 {userData.age}</p>
        <p>Interesser & Hobbies: Programmering{userData.interests}</p>
        <p>Om: Jeg er Datamatiker studerene{userData.about}</p>
        <button className="button" onClick={openModal}>
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default UserProfileDetails;


