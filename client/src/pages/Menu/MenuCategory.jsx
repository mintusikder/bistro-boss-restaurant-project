import React from "react";
import MenuItemCard from "../Shared/MenuItemCard";
import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";

const MenuCategory = ({ items,title,img,subTitle }) => {
  return (
    <>
      {title && <Cover img={img} title={title} subTitle={subTitle} ></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-8 mb-8 mt-16">
        {items.map((item) => (
          <MenuItemCard key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline uppercase border-0 border-b-4 mb-16">
          <Link to={`/order`}>ORDER YOUR FAVOURITE FOOD</Link>
        </button>
      </div>
    </>
  );
};

export default MenuCategory;
