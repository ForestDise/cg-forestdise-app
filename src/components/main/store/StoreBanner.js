import React, { useState } from "react";
import Slider from "react-slick";

function StoreBanner() {

  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-2 bg-white">
      <div className="w-full h-full relative">
        <Slider {...settings}>
          <div>
            <img
              src={
                "https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/1d955663-42a4-473e-9ff7-4fdde13253c1._CR0%2C0%2C3000%2C600_SX1920_.png"
              }
              alt="banner"
            ></img>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default StoreBanner;
