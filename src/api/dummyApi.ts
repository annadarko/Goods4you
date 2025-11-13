import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from 'models/Product';

export type SearchResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export const dummyApi = createApi({
  reducerPath: 'dummyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    searchProducts: builder.query<SearchResponse, { q: string; skip: number; limit: number }>({
      query: ({ q, skip, limit }) => ({ url: '/products/search', params: { q, skip, limit } }),
      keepUnusedDataFor: 60,
      serializeQueryArgs: ({ endpointName, queryArgs }) =>
        `${endpointName}|q=${queryArgs.q}|skip=${queryArgs.skip}|limit=${queryArgs.limit}`,
    }),
    productById: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useSearchProductsQuery, useProductByIdQuery } = dummyApi;