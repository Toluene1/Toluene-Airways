import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import GlobalProvider from "./Provider/GlobalProvider";
import DefaultLayout from "./Layout/Defaultlayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "/products",
  //   element: <Products />,
  // },
  // {
  //   path: "/products/:pid",
  //   element: <Productview />,
  // },
  // {
  //   path: "/cart",
  //   element: <Cart />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
);
