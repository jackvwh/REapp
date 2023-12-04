import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useApiClient } from '../../Hooks/useApiClient';

export default function UserUpdateForm({ userData }) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  function closeModal() {
    setIsModalOpen(false);
  }
  const [userActivities, setUserActivities] = useState([]); // updated values states
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    birthdate: '',
  });

  // Update state when userData changes
  useEffect(() => {
    if (userData) {
      setUserDetails({
        username: userData.username,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        birthdate: userData.birthdate,
      });
      setUserActivities(userData.activities.map(activity => activity.activityType));
    }
  }, [userData]);
  // options list from server
  const {
    data: activityOptions,
    loading: optionsLoading,
    error: optionsError,
  } = useApiClient.useGet('activities/options');

  let options = [];
  // format data to select options
  if (activityOptions) {
    options = activityOptions.map(activity => ({
      value: activity.activity_type,
      label: activity.activity_type,
    }));
  }
  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };
  const handleActivityChange = e => {
    console.log(e)
    const { value } = e.target;
    setUserActivities(value);
  };


  const onSubmit = () => {
    console.log('Saving changes:', userData, userActivities);

    closeModal();
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="containerStyle">
          <h2 className="h2Style">Rediger</h2>
          <form onSubmit={onSubmit}>
            <label className="labelStyle">Brugernavn:</label>
            <input
              type="text"
              name="username"
              value={userDetails.username}
              onChange={handleInputChange}
            />

            <label className="labelStyle">Password:</label>
            <input
              type="number"
              name="password"
              value={userDetails.password}
              onChange={handleInputChange}
            />

            <label className="labelStyle">Førstenavn:</label>
            <input
              type="text"
              name="firstName"
              value={userDetails.firstName}
              onChange={handleInputChange}
            />

            <label className="labelStyle">Efternavn:</label>
            <input
              type="text"
              name="lastName"
              value={userDetails.lastName}
              onChange={handleInputChange}
            />

            <label className="labelStyle">Email:</label>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
            />

            <label className="labelStyle">Alder:</label>
            <input type="date" name="birthdate" onChange={handleInputChange} />

            <label className="labelStyle">Interesser:</label>
            <div className="interests-container">
              <Select
                options={options}
                isMulti
                onChange={handleActivityChange}
                value={userData.activities.map(activity => ({
                  value: activity.activityType,
                  label: activity.activityType,
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
  );
}
