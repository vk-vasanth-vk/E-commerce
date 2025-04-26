import axios from 'axios';
const API = (import.meta as any).env.VITE_API_URL;

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return axios.post(`${API}/register`, data);
};

export const loginUser = async (data: { 
  email: string; 
  password: string 
}) => {
  return axios.post(`${API}/login`, data);
};