import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { LoginUser } from "models/LoginUser";

export type LoginRequest = {
  username: string;
  password: string;
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
    }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<LoginUser, LoginRequest>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    getCurrentUser: builder.query<LoginUser, void>({
        query: () => "auth/me",
    }),
  }),
});

export const { useLoginUserMutation, useGetCurrentUserQuery } = authApi;