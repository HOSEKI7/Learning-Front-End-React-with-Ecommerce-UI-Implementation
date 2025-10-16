import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProductsPage from "./pages/Products";
import ProductDetailPage from "./pages/ProductDetailPage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { MainLayout } from "./components/Layouts/MainLayout";
import ContainerLayout from "./components/Layouts/ContainerLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route element={<ContainerLayout />}>
              <Route path="/products" element={<ProductsPage />} />
              <Route
                path="/products/:productSlug"
                element={<ProductDetailPage />}
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
