import Header from "../Components/Header";
import Footer from "../Components/Footer";
import error from "../Assets/image/404.png";
import React from "react";

function Error404() {
  return (
    <>
      <div className="container">
        <Header />
        <img className="errorLogo" src={error} alt="error" />
        <div className="errorMessage">
          <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
        <a className="errorRedirection" href="http://localhost:3000/" id="clickeable-word">
          Retourner sur la page d'accueil
        </a>
      </div>
      <Footer />
    </>
  );
}

export default Error404;
