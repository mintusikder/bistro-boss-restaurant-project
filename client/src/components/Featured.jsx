import React from "react";
import SectionTitle from "./SectionTitle";
import featuredImg from "../assets/home/featured.jpg";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <section
      className="bg-cover bg-fixed bg-slate-500 py-8 px-4 md:px-16 opacity-90 "
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      <div className="bg-black bg-opacity-60  py-8 px-4 md:px-16 rounded-md">
   <div className="text-white">
   <SectionTitle
          heading={"Featured Items"}
          subHeading={"---Check it out---"}
        />
   </div>
        <div className="md:flex items-center justify-center md:py-16 md:px-36 text-white">
          <div className="flex justify-center md:justify-start">
            <img
              className="rounded-md shadow-lg max-w-full h-auto"
              src={featuredImg}
              alt="Featured Item"
            />
          </div>
          <div className="md:ml-10 mt-10">
            <p className="text-gray-200">March 20, 2023</p>
            <p className="text-2xl font-semibold">WHERE CAN I GET SOME?</p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button  className="btn btn-outline uppercase mt-4 text-white border-0 border-b-4 ">

                <Link to="/menu">Read More</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
