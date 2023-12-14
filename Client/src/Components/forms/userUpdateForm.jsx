import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useApiClient } from '../../Hooks/useApiClient';
import '../../Styles/userProfile.css';

const Spinner = () => {
  return <span className="loading loading-spinner loading-xs"></span>;
};

export default function UserUpdateForm({ userData }) {
  // initialize custom hook
  const {
    executePut,
    data: updateResponse,
    loading: updating,
    error: updateError,
  } = useApiClient.usePut();

  const [userActivities, setUserActivities] = useState();
  const [updatedData, setUpdatedData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    birthdate: '',
  });

  // Set initial user details from userData prop
  useEffect(() => {
    if (userData) {
      setUpdatedData({
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
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleActivityChange = e => {
    setUserActivities(e.map(activity => activity.value));
  };

  function formatBirthdate(date) {
    return new Intl.DateTimeFormat('da-DK').format(date);
  }

  const onSubmit = async e => {
    e.preventDefault();
    try {
      // send updated user object to server
      await executePut('user/' + userData.profileId, {
        ...updatedData,
        activities: userActivities,
      });

      if (updateResponse) {
        console.log(updateResponse);
        window.location.reload();
      }
    } catch (error) {
      console.error(error, updateError);
    }
  };
  return (
    <div className="modal-box w-96">
      <h3 className="font-bold text-2xl flex justify-center my-5">Opdater bruger</h3>
      <form method="dialog">
        <label className="labelStyle">Brugernavn:</label>
        <input
          type="text"
          name="username"
          value={updatedData.username}
          onChange={handleInputChange}
          className="input input-bordered w-full max-w-xs mb-5"
        />

        <label className="labelStyle">Password:</label>
        <input
          type="password"
          name="password"
          value={updatedData.password}
          onChange={handleInputChange}
          className="input input-bordered w-full max-w-xs mb-5"
        />

        <label className="labelStyle">Førstenavn:</label>
        <input
          type="text"
          name="firstName"
          value={updatedData.firstName}
          onChange={handleInputChange}
          className="input input-bordered w-full max-w-xs mb-5"
        />

        <label className="labelStyle">Efternavn:</label>
        <input
          type="text"
          name="lastName"
          value={updatedData.lastName}
          onChange={handleInputChange}
          className="input input-bordered w-full max-w-xs mb-5"
        />

        <label className="labelStyle">Email:</label>
        <input
          type="email"
          name="email"
          value={updatedData.email}
          onChange={handleInputChange}
          className="input input-bordered w-full max-w-xs mb-5"
        />

        <label className="labelStyle">Fødselsdato:</label>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 mb-5">
          <input type="checkbox" />
          <div className="collapse-title">
            <p>
              {updatedData.birthdate &&
                formatBirthdate(new Date(updatedData.birthdate))}
            </p>{' '}
          </div>
          <div className="collapse-content">
            <input
              type="date"
              name="birthdate"
              onChange={handleInputChange}
              value={updatedData.birthdate}
              required
            />
          </div>
        </div>

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
        <div className="flex justify-center">
          <button
            className="btn btn-success text-white mt-5"
            onClick={onSubmit}
            disabled={updating}>
            {updating ? <Spinner /> : 'Gem'}
          </button>
        </div>
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => document.getElementById('update-form').close()}>
          X
        </button>
      </form>
    </div>
  );
}
