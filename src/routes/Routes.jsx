import React from "react";
import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Booking from "../pages/Home/Booking/Booking";

const router = createBrowserRouter([
  {
    path: "home",
    element: <Main></Main>,
    children: [
      {
        path: '/home',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/places')
      },
      {
        path: 'booking/:id',
        element: <Booking></Booking>,
        loader: () => fetch('http://localhost:5000/places')
      }
    ]
  },
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to='/home'></Navigate>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
]);

export default router;
