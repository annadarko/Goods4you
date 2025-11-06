import axiosBase from "./axiosBase";

export const fetchCartsByUsers = async (id: number) => {
    const response = await axiosBase.get(`/carts/user/${id}`, {});
    return response.data;
};