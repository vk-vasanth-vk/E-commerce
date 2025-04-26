import axios from 'axios';
const API = (import.meta as any).env.VITE_API_URL;

export const getProductsByCategory = async (category: string) => {
  return axios.get(`${API}/products/category/${category}`);
};

export const getAllProducts = async () => {
  return axios.get(`${API}/products`);
};

export const getProductById = async (id: string) => {
  return axios.get(`${API}/products/${id}`);
};