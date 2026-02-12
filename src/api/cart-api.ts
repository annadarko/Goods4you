import { User } from "models/User";
import axiosBase from "./axiosBase";


export type UpdateCartBody = {
    merge: false;
    products: Array<{id: number; quantity: number}>;
};

export const updateCart = async (cartId: number, body: UpdateCartBody): Promise<User> => {
    const res = await axiosBase.put<User>(`/carts/${cartId}`, body, {
        params: {merge: false},
    });
    return res.data;
}