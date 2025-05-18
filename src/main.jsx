import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Home.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UploadCoffee from "./components/UploadCoffee.jsx";
import CoffeeDetails from "./components/CoffeeDetails.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("https://coffee-store-app-50954.web.app/coffees"),
        hydrateFallbackElement: <p>coffee is loading......</p>,
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: `/coffee/:id`,
        loader: ({ params }) =>
          fetch(`https://coffee-store-app-50954.web.app/coffees/${params.id}`),
        hydrateFallbackElement: <p>coffee data is loading......</p>,
        Component: CoffeeDetails,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`https://coffee-store-app-50954.web.app/coffees/${params.id}`),
        hydrateFallbackElement: <p>coffee data is loading......</p>,
        Component: UploadCoffee,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/users",
        loader: () => fetch("https://coffee-store-app-50954.web.app/users"),
        hydrateFallbackElement: <p>coffee is loading......</p>,
        Component: Users,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
