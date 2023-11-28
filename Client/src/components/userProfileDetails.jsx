import React, { useState } from 'react';
import Select  from 'react-select';
import '../stylesheets/userProfile.css';


function UserProfileDetails() {
  const [userData, setUserData] = useState({
    image: '',
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    birthdate: ''
  });

  const [interests, setInterests] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  let selectedOptions = []
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

  const options = [
    { value: 'Fodbold', label: 'Fodbold' },
    { value: 'Hockey', label: 'Hockey' },
    { value: 'Volley', label: 'Volley' }
  ]



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
  const handleInterestChange = (e) => {
   console.log(e);
     selectedOptions = Array.from(e, (option) => option.value);
    
  };

  const saveChanges = () => {
    console.log('Saving changes:', userData, interests);
    setInterests(selectedOptions);
    closeModal();
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <div className="containerStyle">
              <h2 className="h2Style">Rediger</h2>
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
                  name="userName"
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
                <div className="interests-container">
                <Select 
                options={options} 
                isMulti
                onChange={handleInterestChange}
                />
                </div>
                

                <div>
                  <button className="button" onClick={saveChanges}>
                    Save Changes
                  </button>
                  <button className="button" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

   
      <div className="display-mode">
        <h2 className="h2Style">Brugerprofil</h2>
        <div className="grid-container">
          <div className="item1 ">
            <img className="imgTest" src="/test.png" alt="user" />
          </div>
          <div className="item2 itemStyle">
            <p className="item-title">Brugernavn:</p>
            <p>{userData.userName}</p>
          </div>
          <div className="item3 itemStyle">
            <p className="item-title">Førstenavn:</p>
            <p>{userData.firstName}</p>
          </div>
          <div className="item4 itemStyle">
            <p className="item-title">Efternavn:</p>
            <p>{userData.lastName}</p>
          </div>
          <div className="item5 itemStyle">
            <p className="item-title">Email:</p>
            <p>{userData.email}</p>
          </div>
          <div className="item6 itemStyle">
            <p className="item-title">Alder:</p>
            <p>{userData.birthdate}</p>
          </div>
          <div className="item7 itemStyle">
            <p className="item-title">Interesser:</p>
            <p>{interests.join(', ')}</p>
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



