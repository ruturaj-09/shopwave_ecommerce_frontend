import axios from 'axios';

export const API_URL =
  "https://shopwave-ecommerce-backend-psi.vercel.app";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
