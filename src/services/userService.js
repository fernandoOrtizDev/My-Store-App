// src/services/userService.js
import api from './api';

export const loginUser = async (credentials) => {
  try {
    console.log("Enviando POST con:", credentials);
    const res = await api.post('/auth/login', credentials);
    console.log("Respuesta del POST (login):", res.data);
    return res.data;
  } catch (err) {
    console.error("Error en el login:", err.response?.data || err.message);
    throw err;
  }
};

export const getAllUsers = async () => {
  const res = await api.get("/users");
  console.log("🔍 Todos los usuarios:", res.data);
  return res.data;
};

export const getUserById = async (id) => {
  const res = await api.get(`/users/${id}`);
  console.log("Respuesta del GET (usuario):", res.data);
  return res.data;
};

export const updateUser = async (id, updatedData) => {
  const res = await api.put(`/users/${id}`, updatedData);
  console.log("Respuesta del PUT (usuario):", res.data);
  return res.data;
};

export const deleteUser = async (id) => {
  const res = await api.delete(`/users/${id}`);
  console.log("Respuesta del DELETE (usuario):", res.data);
  return res.data;
};

export const createUser = async (userData) => {
  console.log("Enviando POST para crear usuario:", userData);
  const res = await api.post("/users", userData);
  console.log("Respuesta del POST (crear usuario):", res.data);
  return res.data;
};
