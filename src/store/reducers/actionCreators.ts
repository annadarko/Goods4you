import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCatalogProducts } from "api/catalog-api";
import { fetchProductInfo } from "api/product-api";
import { fetchCartsByUsers } from "api/user-api";
import { Product } from "models/Product";
import { User } from "models/User";

export const fetchCatalogProduct = createAsyncThunk<
  Product[],
  { q: string; skip: number },
  { rejectValue: string }
>("catalogData/fetchCatalogProducts", async ({ q, skip }, { rejectWithValue }) => {
  try {
    const data = await fetchCatalogProducts(q, skip);
    return data;
  } catch (error) {
    return rejectWithValue(`Server Error ${error}`);
  }
});

export const fetchProductsInfo = createAsyncThunk<
  Product[],
  { id: number },
  { rejectValue: string }
>("products/fetchProductInfo", async ({ id }, { rejectWithValue }) => {
  try {
    const data = await fetchProductInfo(id);
    return data;
  } catch (error) {
    return rejectWithValue(`Error ${error}`);
  }
});

export const fetchCartsByUser = createAsyncThunk<
  User[],
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