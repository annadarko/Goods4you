import axiosBase from "./axiosBase";

export const fetchProductInfo = async (id: number) => {
    const response = await axiosBase.get(`/products/${id}`, {});
    return response.data;
};