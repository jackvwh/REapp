import React from "react";
import HomePageLogo from "../components/homePageLogo";
import HomePagePicture from "../components/homePagePicture";
import HomePageLogIn from "../components/homePageLogIn";

import "../stylesheets/homepage.css";

function HomePage() {
  return (
    <div>
      <div className="title-and-login-container">
        <HomePageLogo />
        <HomePageLogIn />
      </div>
      <HomePagePicture />
    </div>
  );
}

export default HomePage;
