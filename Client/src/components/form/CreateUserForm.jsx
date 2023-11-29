import React from 'react';
import LoginModal from './loginForm';
import '../../stylesheets/homepage.css';

function CreateUserForm() {
  return (
    <div className="create-user-container">
      <h2>Tilmeld dig nu</h2>
      <div className="sign-up-container">
        <section>
          <form id="sign-up-form">
            <input
              className="name-input-field"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Fornavn"
            />
            <input
              className="name-input-field"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Efternavn"
            />
            <br />
            <input
              className="input-field"
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
            />
            <br />
            <input
              className="input-field"
              type="text"
              id="username"
              name="username"
              placeholder="Brugernavn"
            />
            <br />
            <input
              className="input-field"
              type="password"
              id="password"
              name="password"
              placeholder="Adgangskode"
            />
            <br />
            <label htmlFor="birthdate" className="birthdate-styling">
              Fødselsdag:
            </label>
            <input className="birthdate-input-field" name="birthdate" type="date" />
            <div className="create-user-button-container">
              <button type="submit" className="button-30 create-user-button">
                Opret bruger
              </button>
            </div>
          </form>
          <LoginModal />
        </section>
      </div>
    </div>
  );
}

export default CreateUserForm;
