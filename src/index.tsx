import Boxes from "./pages/Boxes/Boxes.tsx";
import Weather from "./pages/Weather/Weather.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/boxes" />,
  },
  {
    path: "/boxes",
    element: <Boxes />,
  },
  {
    path: "/weather",
    element: <Weather />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
