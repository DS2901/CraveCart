import axios from "axios";
import { BASE_URL } from "./constant";

// Create Axios instance
const axiosInterceptor = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor (attach token)
axiosInterceptor.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (handle errors globally)
axiosInterceptor.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized, redirect to login");
      // window.location.href = "/login"; // optional
    }
    return Promise.reject(error);
  }
);

export default axiosInterceptor;
