import React from "react";
import "../stylesheets/homepage.css";

function HomePageLogIn() {
  return (
    <div className="create-user-container">
      <h2>Tilmeld dig nu</h2>
      <div className="log-in-form">
        <section>
          <form id="log-in-form">
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
        </section>
        <div className="log-in-container">
          <h3>Har du allerede en bruger?</h3>
          <button className="button-30">Log ind</button>
        </div>
      </div>
    </div>
  );
}

export default HomePageLogIn;
