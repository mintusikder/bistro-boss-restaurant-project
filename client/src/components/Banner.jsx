import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/home/01.jpg";
import img2 from "../assets/home/02.jpg";

import img4 from "../assets/home/04.jpg";

const Banner = () => {
  return (
    <Carousel
      showArrows={true}
      autoPlay
      infiniteLoop
      interval={3000}
      showThumbs={false}
    >
      <div>
        <img src={img1} alt="Slide 1" />
      </div>
      <div>
        <img src={img2} alt="Slide 2" />
      </div>

      <div>
        <img src={img4} alt="Slide 4" />
      </div>
    </Carousel>
  );
};

export default Banner;
