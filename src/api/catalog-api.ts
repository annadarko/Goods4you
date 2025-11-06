import axiosBase from "./axiosBase";

export type SearchResponse = {
    products: Array<{id: number; title: string; price: number}>;
    total: number;
    skip: number;
    limit: number;
};

export const fetchCatalogProducts = async (
    query: string = '',
    skip: number = 0,
    limit: number = 12
) => {
    const {data} = await axiosBase.get<SearchResponse>('/products/search', {
        params: {q: query, skip, limit},
    });
    return data;
};

