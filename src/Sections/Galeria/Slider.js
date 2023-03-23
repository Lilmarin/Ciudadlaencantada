import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Galeria.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1.15
      }
    }
  ]
};

const Carousel = ({ images }) => {
  return (
    <Slider {...settings}>
      {images.map(image => (
        <div key={image.id} className="containerImage">
          <img src={image.url} alt={image.title} className="imagenCarrusel" />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
