import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from "../pages/login";
import Profile from "../pages/profile";
import Dashboard from "../pages/dashboard";
import ShippingCompany from "../pages/sippingCompany";

const Routers = () => {
    const router = createBrowserRouter([
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/shipping-company",
          element: <ShippingCompany />,
        },
      ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Routers