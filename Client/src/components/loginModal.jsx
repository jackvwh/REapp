import React, { useState } from "react";
import "../stylesheets/homepage.css";

function LoginModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="login-container">
        <div className="login-button-container">
            <p>Har du allerede en profil?</p>
            <button onClick={openModal} className="button-30 login-button">Log ind</button>
        </div>

      {showModal && (
          <div className="login-modal">
        <div className="modal-container">
          <div className="modal-header">
            <h3>Log ind</h3>
          </div>
          <div className="modal-body">
            <input type="text" name="login-username" id="login-username" />
            <br />
            <input type="password" name="login-password" id="login-password" />
          </div>
          <div className="modal-footer">
            <button className="button-30" onClick={closeModal}>Luk</button>
          </div>
        </div>
      </div>
    )}
    </div>
  );
}

export default LoginModal;
