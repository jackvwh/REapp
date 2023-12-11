import React from 'react';
import { useApiClient } from '../Hooks/useApiClient';
import UserUpdateForm from './forms/userUpdateForm';
import SurveyNotification from './notifications/survey';

function UserProfileDetails() {
  // Initialize custom hook
  const {
    executeDelete,
    data: deleteResponse,
    loading: deleting,
    error: deleteError,
  } = useApiClient.useDelete();

  // getAuth user from custom useEffect hook
  const {
    data: userData,
    loading: userIsLoading,
    error: userError,
  } = useApiClient.useGetAuth('user/profile');

  function calcAge(dateString) {
    // + sign converts date string to number(milliseconds since 1970)
    const birthday = +new Date(dateString);
    // calculate age from milliseconds
    return Math.floor((Date.now() - birthday) / 31557600000);
  }

  const onDelete = async e => {
    e.preventDefault();
    try {
      await executeDelete('user/' + userData.profileId);

      if (deleteResponse) {
        window.location.reload();
      }
    } catch (error) {
      console.error(error, deleteError);
    }
  };
  if (userIsLoading) {
    return <p>Loading...</p>; // Loading state
  }

  if (userError) {
    return <p>Error: {userError.message}</p>; // Display error message
  }

  if (!userData) {
    return <p>No user data found.</p>; // Handle no data state
  }

  return (
    <div>
      <dialog id="daily" className="modal">
        <SurveyNotification surveyId={4} feedbackId={1} />
      </dialog>

      <button
        className="button"
        onClick={() => document.getElementById('daily').showModal()}
      >
        Spørgeskema
      </button>

      <dialog id="update-form" className="modal">
        <UserUpdateForm userData={userData} />
      </dialog>

      <div className="display-mode">
        <h2 className="h2Style">Brugerprofil</h2>
        {userIsLoading && <p>Loading...</p>}
        {userError && <p>Something went wrong...</p>}
        {userData && (
          <div className="grid-container">
            <div className="item1 itemStyle">
              <p className="item-title">Brugernavn:</p>
              <p>{userData.username}</p>
            </div>

            <div className="item2 itemStyle">
              <p className="item-title">Førstenavn:</p>
              <p>{userData.firstName}</p>
            </div>
            <div className="item3 itemStyle">
              <p className="item-title">Efternavn:</p>
              <p>{userData.lastName}</p>
            </div>
            <div className="item4 itemStyle">
              <p className="item-title">Email:</p>
              <p>{userData.email}</p>
            </div>
            <div className="item5 itemStyle">
              <p className="item-title">Alder:</p>
              <p>{calcAge(userData.birthdate)}</p>
            </div>
            <div className="item6 itemStyle">
              <p className="item-title">Aktiviteter:</p>
              {userData &&
                userData.activities.map((activity, index) => (
                  <span
                    key={activity.activityType || index}
                    className="badge badge-lg"
                  >
                    {activity.activityType}
                  </span>
                ))}
            </div>
            <div>
              <button
                className="button"
                onClick={() => document.getElementById('update-form').showModal()}
              >
                {' '}
                Opdater oplysninger
              </button>
            </div>
            <div>
              <button className="button" onClick={onDelete}>
                {' '}
                Slet bruger
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfileDetails;
