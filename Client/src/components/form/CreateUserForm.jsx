import React from 'react';
import LoginModal from './loginForm';
import '../../stylesheets/homepage.css';

function CreateUserForm() {
  const serverEndpoint = 'http://localhost:3001';

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
      birthdate: event.target.birthdate.value,
    };

    try {
      const response = await fetch(`${serverEndpoint}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User created successfully!');
      } else {
        console.error('Failed to create user:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while processing the form:', error);
    }
  };

  return (
    <div className="create-user-container">
      <h2>Tilmeld dig nu</h2>
      <div className="sign-up-container">
        <section>
          <form id="sign-up-form" onSubmit={handleSubmit}>
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
