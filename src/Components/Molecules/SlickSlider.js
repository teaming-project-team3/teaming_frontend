import React from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JumboTron from "../Organisms/main/JumboTron";

export default function SlickSlider(props) {
  const { img1, img2, img3 } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
        <div className="w-[300px]">
            <img
              src={
                img1
                  ? img1
                  : "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
              }
              className="block w-full"
              alt="..."
            />
          </div>
        </div>
        <div>
            <div className="w-[300px]">
            <img
              src={
                img1
                  ? img1
                  : "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
              }
              className="block w-full"
              alt="..."
            />
          </div>
        </div>
        <div>
            <div className="w-[300px]">
            <img
              src={
                img1
                  ? img1
                  : "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
              }
              className="block w-full"
              alt="..."
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}
