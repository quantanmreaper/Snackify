import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const images = [
    "/assets/images/sev.jpeg",
    "/assets/images/nuts.jpeg",
    "/assets/images/chakri.jpeg",
    "/assets/images/peanutchiki.jpeg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 750,
    arrows: true, // Show navigation arrows
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-6">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="slider-image mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
