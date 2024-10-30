import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItemCard from "../pages/Shared/MenuItemCard";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  });
  return (
    <section>
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-8 mb-24">
        {menu.map((item) => (
          <MenuItemCard key={item._id} item={item}></MenuItemCard>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
