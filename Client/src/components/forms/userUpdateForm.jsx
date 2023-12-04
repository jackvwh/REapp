import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useApiClient } from '../../Hooks/useApiClient';

const Spinner = () => {
  return <span className="loading loading-spinner loading-xs"></span>;
};

export default function UserUpdateForm({ userData }) {
  console.log(userData);
  // initialize custom hook
  const { executePut, loading: updating } = useApiClient.usePut();
  // modal
  const [isModalClosed, setIsModelClosed] = useState(false);
  // react form hook
  function closeModal() {
    setIsModelClosed(true);
  }
  //
  const [userActivities, setUserActivities] = useState([]);
  const [userDetails, setUserDetails] = useState({
    profileId: '',
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
        profileId: userData.profileId,
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
  const { data: activityOptions } = useApiClient.useGet('activities/options');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleActivityChange = e => {
    setUserActivities(e.map(activity => activity.value));
  };

  function onSubmit() {
    console.log('submitting', userDetails, userActivities);
    // update user with new values
    executePut(`user/${userData.profileId}`, {
      ...userDetails,
      activities: userActivities,
    });
  }

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
                options={
                  (activityOptions &&
                    activityOptions.map(activity => ({
                      value: activity.activity_type,
                      label: activity.activity_type,
                    }))) || { value: 'Loading...', label: 'Loading...' }
                }
                isMulti
                onChange={handleActivityChange}
                placeholder="Vælg interesser"
                value={
                  userActivities &&
                  userActivities.map(activity => ({
                    value: activity,
                    label: activity,
                  }))
                }
              />
            </div>
            <div>
              <button disabled={updating} className="btn btn-primary">
                {updating && <Spinner />}
                Submit
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
