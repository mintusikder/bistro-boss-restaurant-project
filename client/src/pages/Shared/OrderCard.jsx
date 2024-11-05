import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const OrderCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleCard = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axios
        .post("http://localhost:5000/carts", cartItem)
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              title: "Added to Cart!",
              text: `${name} has been added to your cart.`,
              icon: "success",
              confirmButtonText: "Continue Shopping",
            });
          }
        })
        .catch((error) => {
          console.error("Error adding to cart:", error);
          Swal.fire({
            title: "Error",
            text: "Could not add item to cart. Please try again.",
            icon: "error",
            confirmButtonText: "Close",
          });
        });
    } else {
      Swal.fire({
        title: "Not Logged In",
        text: "Please log in to add items to your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mt-4 mr-5 px-5">
        ${price}
      </p>
      <div className="card-body text-center">
        <h2 className="text-3xl">{name}</h2>
        <p>{recipe}</p>
        <div className="flex justify-center">
          <button
            onClick={() => handleCard(item)}
            className="btn btn-outline uppercase border-0 border-b-4 mb-16"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
