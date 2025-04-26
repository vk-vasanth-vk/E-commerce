import axios from 'axios';
const API = process.env.VITE_API_URL;

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return axios.post(`${API}/register`, data);
};
