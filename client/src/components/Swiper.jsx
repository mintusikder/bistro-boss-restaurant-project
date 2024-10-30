import React from "react";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import SectionTitle from "./SectionTitle";

const MySwiper = () => {
  return (
    <section className="mb-24">
      <SectionTitle 
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <SwiperContainer
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
        style={{
          padding: "20px",
          maxWidth: "100%",
          margin: "auto",
        }}
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-3xl text-white uppercase text-center -mt-16">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-3xl text-white uppercase text-center -mt-16">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-3xl text-white uppercase text-center -mt-16">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-3xl text-white uppercase text-center -mt-16">
            desserts
          </h3>
        </SwiperSlide>
      </SwiperContainer>
    </section>
  );
};

export default MySwiper;
