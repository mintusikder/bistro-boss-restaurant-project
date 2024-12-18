import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItemCard from "../pages/Shared/MenuItemCard";
import { Link } from "react-router-dom";
import useMenu from "../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu()
  const popular= menu.filter(item => item.category === "popular")
  console.log(popular,menu)


  return (
    <section>
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-8 mb-8">
        {popular.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline uppercase border-0 border-b-4 mb-16">
          <Link to="/menu">Read More</Link>
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
