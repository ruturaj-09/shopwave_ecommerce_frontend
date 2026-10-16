import axios from 'axios';

export const API_URL = "https://shopwave-ecommerce-backend-psi.vercel.app";
export const DEPLOYED_URL = "https://zosh-bazzar-backend.onrender.com"
// change api

export const api = axios.create({
  baseURL: API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});
