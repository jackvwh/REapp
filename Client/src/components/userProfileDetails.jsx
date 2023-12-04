import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import '../styles/userProfile.css';
import { ApiClient } from '../Api/ApiClient.js';

function UserProfileDetails() {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    birthdate: '',
  });

  const [userActivities, setUserActivities] = useState([]);
  const [activityOptions, setActivityOptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState();

  useEffect(() => {
    getActivityOptions();
    getUser(2);

    console.log(userData, userActivities);
  }, []);

  function getActivityOptions() {
    ApiClient.get('activities/options').then(data => {
      // format data to select options
      const options = data.map(activity => ({
        value: activity.activity_type,
        label: activity.activity_type,
      }));
      setActivityOptions(options);
    });
  }

  function getUser(id) {
    ApiClient.get(`user/${id}`).then(data => {
      const user = data;
      setUserData({
        profileId: user.profileId,
        username: user.username,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        birthdate: formatDate(new Date(user.birthdate)),
      });
      setUserActivities(user.activities.map(activity => activity.activityType));
    });
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat('da-DK').format(date);
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleActivityChange = e => {
    console.log(e)
    const { name } = e.target;
    setUserActivities(...userActivities, value);
  };

  const onSubmit = () => {
    console.log('Saving changes:', userData, userActivities);

    ApiClient.put(`user/${2}`, {
      username: userData.username,
      password: userData.password,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      birthdate: userData.birthdate,
      activities: userActivities,
    }).then(data => {
      console.log('User updated', data);
    });

    closeModal();
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <div className="containerStyle">
              <h2 className="h2Style">Rediger</h2>
              <form onSubmit={onSubmit}>
                <label className="labelStyle">Brugernavn:</label>
                <input
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleInputChange}
                />

                <label className="labelStyle">Password:</label>
                <input
                  type="number"
                  name="password"
                  value={userData.password}
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
                  onChange={handleInputChange}
                />

                <label className="labelStyle">Interesser:</label>
                <div className="interests-container">
                  <Select
                    options={activityOptions}
                    isMulti
                    onChange={handleActivityChange}
                    value={userActivities.map(activity => ({
                      value: activity,
                      label: activity,
                    }))}
                  />
                </div>

                <div>
                  <button type="submit" className="button">
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
          <div className="item1 itemStyle">
            <p className="item-title">Brugernavn:</p>
            <p>{userData.username}</p>
          </div>

          <div className="item2 itemStyle">
            <p className="item-title">Password:</p>
            <p>{userData.password}</p>
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
            {userActivities.map(activity => (
              <span className="badge badge-lg">{activity}</span>
            ))}
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
