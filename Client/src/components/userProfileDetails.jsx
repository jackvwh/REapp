import React from 'react';
import { useApiClient } from '../Hooks/useApiClient';
import UserUpdateForm from './forms/userUpdateForm';

// const userId = localStorage.getItem('userId')

const userId = 5;

function UserProfileDetails() {
  // get user from custom useEffect hook
  const {
    data: userData,
    loading: userIsLoading,
    error: userError,
  } = useApiClient.useGet('user/' + userId);

  function calcAge(dateString) {
    const birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / 31557600000);
  }

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
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
                onClick={() => document.getElementById('my_modal_4').showModal()}
              >
                Opdater oplysninger
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfileDetails;
