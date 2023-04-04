import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Maintag from "./Components/Maintag/Maintag";
import SingleMealDetails from "./Components/SingleMealDetails/SingleMealDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Maintag></Maintag>,
        /* loader: () =>
          fetch(
            "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
          ), */
      },
      {
        path: "/about",
        element: (
          <div className="py-12 font-semibold text-2xl text-center text-red-600">
            This section is under maintanence. Please try again later.
          </div>
        ),
      },
      {
        path: "/meal/:mealid",
        element: <SingleMealDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
