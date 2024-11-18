import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Category from "../Components/Category";
import AuthLayout from "../Pages/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsLayout from "../Pages/NewsLayout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Navigate to={`/category/01`}></Navigate>,
          },
          {
            path: "/category/:id",
            element: <Category></Category>,
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/news/category/${params.id}`
              ),
          },
        ],
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsLayout></NewsLayout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
      },
      {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/register",
            element: <Register></Register>,
          },
          {
            path: "/auth/login",
            element: <Login></Login>,
          },
        ],
      },
    ],
  },
]);

export default router;
