import axiosBase from "./axiosBase";
import { Product } from "models/Product";

export const fetchCatalogProducts = async (
    query: string = '',
    skip: number = 0,
    limit: number = 12
) : Promise<Product[]> => {
    const response = await axiosBase.get<Product[]>(`/products/search`, {
        params: {
            q: query,
            skip: skip,
            limit: limit,
        },
    });
    return response.data;
};