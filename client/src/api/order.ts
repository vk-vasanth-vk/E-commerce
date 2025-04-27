import axios from 'axios';
const API = (import.meta as any).env.VITE_API_URL;

export const storeOrder = async (order: any, token: string) => {
  return axios.post(`${API}/orders`, 
    order, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
};
