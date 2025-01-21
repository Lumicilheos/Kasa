import React from "react";
import "../Assets/scss/Components/_footer.scss";
import logo from "../Assets/image/logo_black.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo du site" />
      </div>

      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
