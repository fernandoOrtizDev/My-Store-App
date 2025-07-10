import { Routes, Route } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import ProductDetailPage from "../components/pages/ProductDetailPage";
import ProductFormPage from "../components/pages/ProductFormPage";
import NotFound from "../components/pages/NotFound";
import { useFetchProducts } from "../hook";
import LoginPage from "../components/pages/LoginPage";
import UserProfilePage from "../components/pages/UserProfilePage";
import UserFormPage from "../components/pages/UserFormPage";

function AppRoutes() {
  const { loading, products, error } = useFetchProducts();
  return (
    <Routes>
      <Route path="/" element={<HomePage products={products} loading={loading} error={error}/>} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/create" element={<ProductFormPage />} />
      <Route path="/edit/:id" element={<ProductFormPage isEdit />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/user/:id" element={<UserProfilePage />} />
      <Route path="/create-user" element={<UserFormPage />} />
      <Route path="/edit-user/:id" element={<UserFormPage isEdit />} />
      
    </Routes>
  );
}

export default AppRoutes;
