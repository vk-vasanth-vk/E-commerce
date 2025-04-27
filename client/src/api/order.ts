import axios from 'axios';
const API = (import.meta as any).env.VITE_API_URL;

export const storeOrder = async (order) => {
  return axios.post(`${API}/orders`, order);
};
