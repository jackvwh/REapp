import React from 'react';
import LoginModal from './loginForm';
import { useNavigate } from 'react-router-dom';
import '../../Styles/homepage.css';

function CreateUserForm() {
  const serverEndpoint =
    process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';
  const formRef = React.createRef();
  const navigate = useNavigate();

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
      const response = await fetch(`${serverEndpoint}/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        formRef.current.reset();
        navigate('/userpage');
      } else {
        console.error('Failed to create user:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred while processing the form:', error);
    }
  };

  return (
    <div className="create-user-container text-black">
      <h2 className="my-1">Tilmeld dig nu</h2>
      <div className="sign-up-container">
        <section>
          <form id="sign-up-form" onSubmit={createUser} ref={formRef}>
            <input
              className="input w-full max-w-2xs text-black input-field input-bordered"
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Fornavn"
            />
            <input
              className="input w-full max-w-2xs text-black input-field input-bordered"
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Efternavn"
            />
            <br />
            <input
              className="input w-full max-w-xs text-black input-bordered"
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
            />
            <br />
            <input
              className="input w-full max-w-xs text-black input-bordered"
              type="text"
              id="username"
              name="username"
              placeholder="Brugernavn"
            />
            <br />
            <input
              className="input w-full max-w-xs text-black input-bordered"
              type="password"
              id="password"
              name="password"
              placeholder="Adgangskode"
            />
            <br />
            <label htmlFor="birthdate" className="text-lg mx-5">
              Fødselsdag:
            </label>
            <input className="birthdate-input-field" name="birthdate" type="date" />
            <div className="create-user-button-container">
              <button type="submit" className="btn btn-success button-30 text-white">
                Opret bruger
              </button>
            </div>
          </form>
          <div className="divider text-sm">ELLER</div>
          <LoginModal />
        </section>
      </div>
    </div>
  );
}

export default CreateUserForm;
