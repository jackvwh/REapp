import React from 'react';
import { useApiClient } from '../Hooks/useApiClient';
import UserUpdateForm from './forms/userUpdateForm';
import SurveyNotification from './notifications/survey';
import '../Styles/userProfile.css';

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
    <div className="bg-white flex flex-col pb-12">
      <dialog id="update-form" className="modal">
        <UserUpdateForm userData={userData} />
      </dialog>
      <dialog id="daily" className="modal">
        <SurveyNotification surveyId={4} feedbackId={1} />
      </dialog>

      <div className="self-center w-full max-w-[982px] mt-7 px-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[30%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2b6017f901476ba56865b575956b64f09d0ec29d5fdf7b241a6cd7d16cfa6261?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b6017f901476ba56865b575956b64f09d0ec29d5fdf7b241a6cd7d16cfa6261?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b6017f901476ba56865b575956b64f09d0ec29d5fdf7b241a6cd7d16cfa6261?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b6017f901476ba56865b575956b64f09d0ec29d5fdf7b241a6cd7d16cfa6261?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b6017f901476ba56865b575956b64f09d0ec29d5fdf7b241a6cd7d16cfa6261?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b6017f901476ba56865b575956b64f09d0ec29d5fdf7b241a6cd7d16cfa6261?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b6017f901476ba56865b575956b64f09d0ec29d5fdf7b241a6cd7d16cfa6261?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2b6017f901476ba56865b575956b64f09d0ec29d5fdf7b241a6cd7d16cfa6261?apiKey=e0c67a2aaffa4b4fa475213d30af4a48&"
              className="aspect-square object-contain object-center w-full overflow-hidden max-md:mt-9"
            />
          </div>
          <div className="flex flex-col items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-9">
              <div className="bg-zinc-300 flex flex-col items-center px-3.5 py-2">
                <div className="text-black text-center text-xl italic max-w-[307px]">
                  Fulde navn
                </div>
                <div className="justify-center text-black text-center text-xl italic bg-white self-stretch items-stretch mt-2 px-10 py-2.5 max-md:px-5">
                  {userData.firstName} {userData.lastName}
                </div>
              </div>
              <div className="bg-zinc-300 flex flex-col items-center mt-8 pt-1.5 pb-3.5 px-3.5">
                <div className="text-black text-center text-xl italic max-w-[308px]">
                  Alder
                </div>
                <div className="justify-center text-black text-center text-xl italic bg-white self-stretch items-center mt-2 px-16 py-2.5 max-md:px-5">
                  {calcAge(userData.birthdate)} år
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-9">
              <div className="bg-zinc-300 flex flex-col items-center px-3.5 py-2">
                <div className="text-black text-center text-xl italic max-w-[308px]">
                  E-mail
                </div>
                <div className="justify-center text-black text-center text-xl italic bg-white self-stretch items-stretch mt-2 pl-2.5 pr-1.5 py-2.5">
                  {userData.email}
                </div>
              </div>
              <div className="bg-zinc-300 flex flex-col mt-8 pt-1.5 pb-3.5 px-3.5">
                <div className="activity">
                  <p>Aktiviteter:</p>
                  {userData &&
                    userData.activities.map((activity, index) => (
                      <div
                        key={activity.activityType || index}
                        className="justify-center text-black text-center text-xl italic bg-white self-stretch items-stretch mt-2 pl-2.5 pr-1.5 py-2.5">
                        {activity.activityType}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[982px] mt-10 mb-28 max-md:max-w-full max-md:mb-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
            <div className="bg-zinc-300 flex grow flex-col items-center w-full pt-2 pb-5 px-6 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="justify-center text-black text-center text-xl italic whitespace-nowrap">
                Om mig
              </div>
              <div className="text-black text-sm italic bg-white self-stretch items-stretch mt-1 pt-3 pb-20 px-3 max-md:max-w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not
                only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </div>
            </div>
          </div>
          <div className="join join-vertical">
            <div>
              <button
                className="btn btn-primary text-lg mb-5 w-60"
                onClick={() => document.getElementById('daily').showModal()}>
                Spørgeskema
              </button>
            </div>
            <div>
              <button
                className="btn btn-primary text-lg mb-5 w-60"
                onClick={() => document.getElementById('update-form').showModal()}>
                Opdater oplysninger
              </button>
            </div>
            <button className="btn btn-error text-lg mb-5 w-60" onClick={onDelete}>
              Slet bruger
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileDetails;
