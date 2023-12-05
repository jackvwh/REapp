import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useApiClient } from '../../Hooks/useApiClient';

const Spinner = () => {
  return <span className="loading loading-spinner loading-xs"></span>;
};

export default function UserUpdateForm({ userData }) {
  // initialize custom hook
  const {
    executePut,
    loading: updating,
    error: updateError,
  } = useApiClient.usePut();
  // modal
  const [isModalClosed, setIsModelClosed] = useState(false);
  // react form hook
  function closeModal() {
    setIsModelClosed(true);
  }
  //  state
  const [userActivities, setUserActivities] = useState();
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
  const { data: activityOptions } = useApiClient.useGet('activities/options');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleActivityChange = e => {
    setUserActivities(e.map(activity => activity.value));
  };

  function onSubmit(e) {
    e.preventDefault();
    // update user object with new values
    const updatedUser = {
      ...userDetails,
      activities: userActivities,
    };
    try {
      executePut('user/' + userData.profileId, updatedUser);
      window.location.reload();
    } catch (error) {
      console.log(error, updateError);
    }
  }
  return (
    <div className="modal-box">
      <h3 className="font-bold text-lg">Opdater bruger</h3>
      <div className="modal-action">
        <form method="dialog">
          <label className="labelStyle">Brugernavn:</label>
          <input
            type="text"
            name="username"
            value={userDetails.username}
            onChange={handleInputChange}
          />

          <label className="labelStyle">Password:</label>
          <input
            type="password"
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
          <input
            type="date"
            name="birthdate"
            onChange={handleInputChange}
            required
          />

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
          <button className="button" onClick={onSubmit} disabled={updating}>
            {updating ? <Spinner /> : 'Gem'}
          </button>
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => document.getElementById('my_modal_4').close()}>
            X
          </button>
        </form>
      </div>
    </div>
  );
}
