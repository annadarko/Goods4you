import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCartsByUsers } from "api/user-api";
import { CartsData } from "api/user-api";

export const fetchCartsByUser = createAsyncThunk<
  CartsData,
  { id: number },
  { rejectValue: string }
>(`carts/fetchUser`, async ({ id }, { rejectWithValue }) => {
  try {
    const data = await fetchCartsByUsers(id);
    return data;
  } catch (error) {
    return rejectWithValue(`Error ${error}`);
  }
});