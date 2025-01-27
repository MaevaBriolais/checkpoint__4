import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Accueil from "./pages/Accueil";
import Patisseries from "./pages/Patisseries";
import PatisserieIndiv from "./components/PatisserieIndiv";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Accueil/>
      },
      {
        path:"/patisseries",
        element: <Patisseries/>
      },
      {
        path:"/patisseries/:id",
        element: <PatisserieIndiv/>
      },
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
