import React from 'react';
import { useState } from 'react';

function NotificationModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-sm btn-primary"
        onClick={() => document.getElementById('my_modal_2').showModal()}>
        Open
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
export default NotificationModal;
