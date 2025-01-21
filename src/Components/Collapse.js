import React, { useState } from "react";
// import css ?
import "../Assets/css/styles.css";

const Collapse = ({ width = "100%", title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      {/* titre et btn */}
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        <button className={`arrow ${isOpen ? "open" : ""}`}>
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </div>
      {/* Contenu / anim */}
      <div className={`collapse-content ${isOpen ? "show" : ""}`}>{content}</div>
    </div>
  );
};

export default Collapse;
