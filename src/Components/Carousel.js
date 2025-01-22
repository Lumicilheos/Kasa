import React, { useState } from "react";
import arrowLeft from "../Assets/image/arrow_left.png";
import arrowRight from "../Assets/image/arrow_right.png";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour gérer la navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-image">
        <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
      {pictures.length > 1 && (
        <>
          <img src={arrowLeft} alt="Précédent" onClick={handlePrev} className="arrowLeft" />
          <img src={arrowRight} alt="Suivant" onClick={handleNext} className="arrowRight" />
        </>
      )}
    </div>
  );
};
// try

export default Carousel;
