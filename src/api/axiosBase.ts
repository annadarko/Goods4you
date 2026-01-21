import axios from "axios";

const axiosBase = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosBase;