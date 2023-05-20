import type { AxiosInstance } from 'axios';
import axios from 'axios';

const { VITE_APP_BASE_URL } = import.meta.env;

export const http: AxiosInstance = axios.create({
  baseURL: VITE_APP_BASE_URL,
});
