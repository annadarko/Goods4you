import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateCart } from "api/cart-api";
import { fetchCartsByUsers } from "api/user-api";
import { CartsData } from "api/user-api";
import type { User } from "models/User";
import type { RootState } from "store/store";

export const fetchCartsByUser = createAsyncThunk<
  CartsData,
  { id: number },
  { rejectValue: string }
>('carts/fetchUser', async ({ id }, { rejectWithValue }) => {
  try {
    const data = await fetchCartsByUsers(id);
    return data;
  } catch (error) {
    return rejectWithValue(`Error ${error}`);
  }
});

type UpdateCartItemArgs ={
  productId: number;
  nextQty: number;
};

export const updateCartItem = createAsyncThunk<
  User,
  UpdateCartItemArgs,
  {state: RootState; rejectValue: string}
>('carts/updateItem', async ({productId, nextQty}, {getState, rejectWithValue}) => {
  try{
    const state = getState();
    const cart = state.userSlice.user.carts[0];

    if(!cart) return rejectWithValue('Cart not loaded');
    const cartId = cart.id;
    if (!cartId) return rejectWithValue('Cart ID missing');

    const prevProducts = cart.products ?? [];

    const map = new Map<number, number>();
    prevProducts.forEach(p => map.set(p.id, p.quantity ?? 0));

    if (nextQty <= 0) map.delete(productId);
    else map.set(productId, nextQty);

    const products = Array.from(map.entries()).map(([id, quantity]) => ({id, quantity}));

    const updatedCart = await updateCart(cartId, {merge: false, products});

    return updatedCart;
  } catch (error: any) {
    return rejectWithValue(error?.message ?? "Update cart failed");;
  }
});