import React from "react";
import HomePageLogo from "../components/homePageLogo";
import HomePagePicture from "../components/homePagePicture";
import HomePageCreateUser from "../components/homePageCreateUser";

import "../stylesheets/homepage.css";

function HomePage() {
  return (
    <>
      <main>
        <HomePagePicture />
      <div className="title-and-login-container">
        <HomePageLogo />
        <HomePageCreateUser/>
      </div>
      </main>
    </>
  );
}

export default HomePage;
