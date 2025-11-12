import axiosBase from "./axiosBase";
import { Product } from "models/Product";

export type SearchResponse = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
};

export const fetchCatalogProducts = async (
    query: string = '',
    skip: number = 0,
    limit: number = 12
) : Promise<SearchResponse> => {
    const response = await axiosBase.get<SearchResponse>(`/products/search`, {
        params: {
            q: query,
            skip: skip,
            limit: limit,
        },
    });
    return response.data;
};