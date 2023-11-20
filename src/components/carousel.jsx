import React, { useState } from 'react';
import '../styles/carousel.scss';
import leftArrowImg from '../assets/left_arrow.png';
import rightArrowImg from '../assets/right_arrow.png';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length; 

  const goToPrevious = () => {
    if (totalImages > 1) {
      const isFirstImage = currentIndex === 0;
      const newIndex = isFirstImage ? totalImages - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  };

  const goToNext = () => {
    if (totalImages > 1) {
      const isLastImage = currentIndex === totalImages - 1;
      const newIndex = isLastImage ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}>
          </div>
        ))}
        {totalImages > 1 && (
          <>
            <button className="left-arrow" onClick={goToPrevious}>
              <img src={leftArrowImg} alt="Précédent" />
            </button>
            <button className="right-arrow" onClick={goToNext}>
              <img src={rightArrowImg} alt="Suivant" />
            </button>
          </>
        )}
        <div className="carousel-indicator">
          {`${currentIndex + 1}/${totalImages}`}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
