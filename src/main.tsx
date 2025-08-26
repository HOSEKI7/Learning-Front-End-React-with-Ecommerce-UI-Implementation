import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/login.tsx";
import RegisterPage from "./pages/register.tsx";
import ProductDetailPage from "./pages/ProductDetailPage.tsx";
import ContactPage from "./pages/Contact.tsx";
import AboutPage from "./pages/About.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ProductsPage from "./pages/Products.tsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <MainLayout />,
  //   children = [
  {
    index: true,
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "products",
    element: <ProductsPage />,
  },
  {
    path: "product/:productSlug",
    element: <ProductDetailPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "contact",
    element: <ContactPage />,
  },
  //   ],
  // },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
