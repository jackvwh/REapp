import React from "react";
import "../stylesheets/homepage.css";

function HomePageLogIn() {
    return (
        <div className="log-in-container">
            <h2>Tilmeld dig i dag.</h2>
            <div className="log-in-form">
                <section>
                    <form id="log-in-form">
                        <input className="input-field" type="email" id="email" name="email" placeholder="E-mail" />
                        <br />
                        <input className="input-field" type="text" id="username" name="username" placeholder="Brugernavn" />
                        <br />
                        <input className="input-field" type="password" id="password" name="password" placeholder="Adgangskode" />
                        <br />
                        <input className="button-50" type="submit" value="opret profil" />
                    </form>
                </section>
            </div>
        </div>
    )
}

export default HomePageLogIn;