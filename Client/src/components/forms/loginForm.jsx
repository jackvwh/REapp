import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/homepage.css';

function LoginModal() {
  const serverEndpoint = 'http://localhost:3001';
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const loginUser = async event => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      const response = await fetch(`${serverEndpoint}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const user = await response.json();
      console.log(`Succesfully logged into ${username}`, user);
      navigate('/notadminpage');
    } catch (err) {
      console.error(err);
    }
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
              <form id="login-form" onSubmit={loginUser}>
                <input
                  className="input-field"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Brugernavn"
                />
                <br />
                <input
                  className="input-field"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Adgangskode"
                />
                <br />
                <button className="button-30 login-button">Log ind</button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="button-30 close-login-modal-button"
                onClick={closeModal}>
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
