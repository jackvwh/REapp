import React from "react";
import LoginModal from "../components/loginModal";
import "../stylesheets/homepage.css";

function HomePageLogIn() {
  return (
    <div className="create-user-container">
      <h2>Tilmeld dig nu</h2>
      <div className="sign-up-form">
        <section>
          <form id="sign-up-form">
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
            <div className="create-user-button-container">
              <input
                className="button-30 create-user-button"
                type="submit"
                value="Opret profil"
              />
            </div>
          </form>
          <LoginModal />
        </section>
      </div>
    </div>
  );
}

export default HomePageLogIn;
