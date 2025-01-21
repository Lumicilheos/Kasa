import React from "react";
import Carousel from "../Components/Carousel";
import Collapse from "./Collapse";
import "../Assets/scss/Components/_house.scss";

// fonction rating

const renderStars = (rating) => {
  const maxStars = 5;
  const filledStars = Math.round(rating);
  const stars = [];

  for (let i = 0; i < maxStars; i++) {
    stars.push(
      <i key={i} className={`fa-solid fa-star ${i < filledStars ? "star-filled" : "star-empty"}`}></i>
    );
  }

  return stars;
};

const HousingCard = ({ housing }) => {
  const { title, description, host, rating, location, equipments, tags, pictures } = housing;

  return (
    <div className="housing-card">
      <Carousel pictures={pictures} className="carousel-picture" />
      <div className="logement-groupe">
        <div className="logementg1">
          <h2 className="logement-title">{title}</h2>
          <p className="logement-location">{location}</p>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="logementg2">
          <div className="host-info">
            <p className="host-name">{host.name}</p>
            <img src={host.picture} alt={host.name} className="host-picture" />
          </div>
          <div className="rating-stars">{renderStars(rating)}</div>
        </div>
      </div>
      <div className="collapse-logement">
        <Collapse title="Description" content={description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default HousingCard;
