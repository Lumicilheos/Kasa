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
      {/* Flèche gauche */}
      <img src={arrowLeft} alt="Previous" onClick={handlePrev} className="arrowLeft" />

      {/* Flèche droite */}
      <img src={arrowRight} alt="Next" onClick={handleNext} className="arrowRight" />
    </div>
  );
};

export default Carousel;
