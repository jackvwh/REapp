import React from "react";
import CreateUserForm from "../components/form/CreateUserForm";

import "../stylesheets/homepage.css";

function HomePage() {
  return (
    <>
      <main>
        {/*Background picture for homepage*/}
        <div className="home-page-picture-container">
          <img
            className="home-page-picture"
            src="/pics/homePagePicture.jpg"
            alt="REapp Background"
          />
        </div>

        {/*Logo and create user form*/}
        <div className="title-and-login-container">
          <div className="reapp-logo-container">
            <header>
              <h1 className="reapp-logo">REapp</h1>
            </header>
          </div>
          <CreateUserForm />
        </div>

        {/*Home page icons*/}
        <div className="home-page-icon-container">
          <div className="home-page-icon">
            <img
              className="home-page-icon-image"
              src="/pics/love.png"
              alt="REapp Icon"
            />
            <p className="home-page-icon-text">Personlig støtte</p>
          </div>
          <div className="home-page-icon">
            <img
              className="home-page-icon-image"
              src="/pics/task.png"
              alt="REapp Icon"
            />
            <p className="home-page-icon-text">Daglige opgaver</p>
          </div>
          <div className="home-page-icon">
            <img
              className="home-page-icon-image"
              src="/pics/support.png"
              alt="REapp Icon"
            />
            <p className="home-page-icon-text">Fællesskab</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
