import React from 'react';
import LoginModal from './loginForm';
import '../../Styles/homepage.css';

function CreateUserForm() {
  const serverEndpoint = REACT_APP_API_URL || 'http://localhost:3001/';
  const formRef = React.createRef();

  const createUser = async event => {
    event.preventDefault();

    const formData = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
      birthdate: event.target.birthdate.value,
    };
    // TODO: might need to be run through useAPIClient instead
    try {
      const response = await fetch(`${serverEndpoint}/user/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(`User created: ${formData.username}`);
        formRef.current.reset();
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
          <form id="sign-up-form" onSubmit={createUser} ref={formRef}>
            <input
              className="name-input-field"
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Fornavn"
            />
            <input
              className="name-input-field"
              type="text"
              id="last_name"
              name="last_name"
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
