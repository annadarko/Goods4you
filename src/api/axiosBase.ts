import axios from "axios";

const axiosBase = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosBase.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default axiosBase;