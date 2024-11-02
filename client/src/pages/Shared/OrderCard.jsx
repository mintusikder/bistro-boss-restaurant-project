import React from "react";
import { Link } from "react-router-dom";

const OrderCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900  text-white absolute right-0 mt-4 mr-5 px-5">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="text-3xl">{name}</h2>
        <p>{recipe}</p>

        <div className="flex justify-center">
          <button className="btn btn-outline uppercase border-0 border-b-4 mb-16">
            <Link to="/menu">Add To Cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
