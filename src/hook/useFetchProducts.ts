import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const loadProducts = async () => {
      try {
        if (products.length === 0) {
          const data = await getProducts();
          setProducts(data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  },[]);

  return {
    products,
    loading,
    error,
  };
};
