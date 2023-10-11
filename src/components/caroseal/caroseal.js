import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./caroseal.css";

function Carousel() {
  const clientImages = [
    "assets/images/clients/c1.png",
    "assets/images/clients/c2.png",
    "assets/images/clients/c3.png",
    "assets/images/clients/c4.png",
    "assets/images/clients/c5.png",
    "assets/images/clients/c1.png",
    "assets/images/clients/c2.png",
    "assets/images/clients/c3.png",
    "assets/images/clients/c4.png",
    "assets/images/clients/c5.png",
  ];

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    prevArrow: (
      <button className="custom-prev-button" style={{ color: "blue" }}>
        Previous
      </button>
    ),
    nextArrow: <button className="custom-next-button">Next</button>,
  };

  return (
    <section id="clients" className="clients">
      <div className="container">
        <Slider {...settings} className="owl-carousel owl-theme" id="client">
          {clientImages.map((image, index) => (
            <div className="item" key={index}>
              <a href="#">
                <img src={image} alt={`brand-image-${index}`} />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Carousel;
