import axiosBase from "./axiosBase";
import { User } from "models/User";

export interface CartsData {
    carts: User[];
}

export const fetchCartsByUsers = async (id: number): Promise<CartsData> => {
    const response = await axiosBase.get<CartsData>(`/carts/user/${id}`, {});
    return response.data;
};