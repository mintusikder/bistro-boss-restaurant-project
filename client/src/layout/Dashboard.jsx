import React from "react";
import {
  FaCalendar,
  FaDAndD,
  FaHome,
  FaList,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allItems">
                  <FaCalendar></FaCalendar> All Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaShoppingCart></FaShoppingCart> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBooking">
                  <FaDAndD></FaDAndD> Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaList></FaList> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart> My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaDAndD></FaDAndD> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <FaList></FaList> My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider "></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
