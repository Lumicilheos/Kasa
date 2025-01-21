import React from "react";
import "../Assets/scss/Components/_banner.scss";
import { Link } from "react-router-dom";

import logo from "../Assets/image/logo.png";

function Header() {
  return (
    <>
      {/* Barre de navigation */}
      <header className="banner">
        <img src={logo} alt="Logo" className="banner-logo" />

        <nav className="banner-nav">
          <Link to="/" className="banner-link">
            Accueil
          </Link>
          <Link to="/about" className="banner-link">
            À propos
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
