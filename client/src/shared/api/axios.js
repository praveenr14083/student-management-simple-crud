import axios from "axios";
import useAuthStore from "../../features/auth/authStore";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token; // gets persisted token
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
