import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { LoginUser } from "models/LoginUser";

export type LoginRequest = {
  username: string;
  password: string;
};

export type CurrentUser = Omit<LoginUser, 'accessToken' | 'refreshToken'>;

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) headers.set('Authorization', `Bearer ${token}`);
        return headers;
    }
})

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  tagTypes: ['Me'],
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginUser, LoginRequest> ({
        query: (body) => ({
            url: '/auth/login',
            method: 'POST',
            body,
        }),
        invalidatesTags: ['Me'],
    }),
    getCurrentUser: builder.query<CurrentUser, void>({
        query: () => '/auth/me',
        providesTags: ['Me'],
    }),
  }),
});

export const { useLoginUserMutation, useGetCurrentUserQuery } = authApi;