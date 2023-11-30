import React, { useState } from 'react';
import '../../stylesheets/homepage.css';

function LoginModal() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="login-button-container">
        <p>Har du allerede en profil?</p>
        <button onClick={openModal} className="button-30 login-button">
          Log ind
        </button>
      </div>

      {showModal && (
        <div>
          <div className="modal-container">
            <div className="modal-header">
              <h3>Log ind</h3>
            </div>
            <div className="modal-body">
              <form id="login-form">
                <input
                  className="input-field"
                  type="text"
                  name="login-username"
                  id="login-username"
                  placeholder="Brugernavn"
                />
                <br />
                <input
                  className="input-field"
                  type="password"
                  name="login-password"
                  id="login-password"
                  placeholder="Adgangskode"
                />
                <br />
                <button className="button-30 login-button">Log ind</button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="button-30 close-login-modal-button"
                onClick={closeModal}
              >
                Luk
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginModal;