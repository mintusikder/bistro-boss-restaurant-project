import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../pages/Dashboard/allUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element:<PrivateRoutes>
       <Dashboard></Dashboard>
    </PrivateRoutes>,
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },

      //admin routes 
      {
        path:"/dashboard/allUsers",
        element:<AllUsers></AllUsers>
      }
    ],
  },
]);
