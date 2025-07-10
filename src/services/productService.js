// src/services/productService.js
import api from './api';

export const getProducts = async () => {
  const res = await api.get('/products');
  return res.data;
};

export const getProductById = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};

export const createProduct = async (product) => {
  console.log("Enviando POST con:", product);
  const res = await api.post('/products', product);
  console.log("Respuesta del POST:", res.data);
  return res.data;
};

export const updateProduct = async (id, product) => {
  const res = await api.put(`/products/${id}`, product);
  console.log("Respuesta del PUT:", res.data);
  return res.data;
};

export const deleteProduct = async (id) => {
  console.log("Enviando DELETE a /products/" + id);
  const res = await api.delete(`/products/${id}`);
  console.log("Respuesta del DELETE:", res.data);
  return res.data;
};
