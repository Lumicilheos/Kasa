import React from "react";
import "../Assets/scss/Components/_banner.scss";

function Banner({ bg, title }) {
  return (
    <>
      <div className="banner-img" style={{ backgroundImage: `url(${bg})` }}>
        {title !== undefined && <h1 className="banner-text">{title}</h1>}
      </div>
    </>
  );
}

export default Banner;
