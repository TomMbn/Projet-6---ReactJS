import React, { useState } from 'react';
import "../styles/Carousel.css"
import ArrowRight from "../assets/arrowRight.png"
import ArrowLeft from "../assets/arrowLeft.png"


function Carousel({gallery}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % gallery.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className='carouselWrapper'>
      <div className="carousel-image">
        <div className="carousel-arrow arrow-left" onClick={handlePrevSlide}>
         <img src={ArrowLeft} alt="Arrow Left" />
        </div>
        <img src={gallery[currentSlide]} alt={`${currentSlide}`} className="galleryImage"/>
        <div className="carousel-arrow arrow-right" onClick={handleNextSlide}>
        <img src={ArrowRight} alt="Arrow Right" />
        </div>
        <p className='counterSlide'>{currentSlide+1}/{gallery.length}</p>
      </div>
    </div>
  );
}

export default Carousel;
