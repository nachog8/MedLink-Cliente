import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
