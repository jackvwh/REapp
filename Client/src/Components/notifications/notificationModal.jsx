import React from 'react';
import NotificationBox from '../../Styles/notificationBox.css';

function NotificationModal() {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-sm text-black bg-sky-500/50 hover:bg-sky-500/100"
        onClick={() => document.getElementById('my_modal_2').showModal()}
      >
        Open
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box py-16 px-8 w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            dolor dolorem excepturi sit ipsam laudantium, praesentium nostrum natus
            exercitationem saepe quasi. Deserunt omnis rem dolorem eius a ipsam sit
            explicabo.
          </span>
          <br />
          <div className="btn-styling-container">
            <button className="btn btn-success btn-styling">Ja!</button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
export default NotificationModal;
