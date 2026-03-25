import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateCart } from "api/cart-api";
import { fetchCartsByUsers } from "api/user-api";
import { CartsData } from "api/user-api";
import axios from "axios";
import type { User } from "models/User";
import type { RootState } from "store/store";

type UpdateCartItemArgs ={
  productId: number;
  nextQty: number;
};

const buildUpdatedProducts = (
  prevProducts: Array<{id: number; quantity: number}>,
  productId: number,
  nextQty: number,
) => {
  const map = new Map<number, number> ();

  prevProducts.forEach((product) => {
    map.set(product.id, product.quantity ?? 0);
  });

  if (nextQty <= 0) {
    map.delete(productId);
  } else {
    map.set(productId, nextQty);
  }

  return Array.from(map.entries()).map(([id, quantity]) => ({
    id,
    quantity,
  }));
};

export const fetchCartsByUser = createAsyncThunk<
  CartsData,
  { id: number },
  { rejectValue: string }
>('carts/fetchUser', async ({ id }, { rejectWithValue }) => {
  try {
    const data = await fetchCartsByUsers(id);
    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(`Error ${error.message}`);
    }

    if (error instanceof Error) {
      return rejectWithValue(`Error ${error.message}`);
    }

    return rejectWithValue('Error fetching carts');
  }
});

export const updateCartItem = createAsyncThunk<
  User,
  UpdateCartItemArgs,
  {state: RootState; rejectValue: string}
>('carts/updateItem', async ({productId, nextQty}, {getState, rejectWithValue}) => {
  try{
    const state = getState();
    const cart = state.userSlice.user.carts[0];

    if(!cart) return rejectWithValue('Cart not loaded');
    if (!cart.id) return rejectWithValue('Cart ID missing');

    const prevProducts = cart.products ?? [];
    const products = buildUpdatedProducts(prevProducts, productId, nextQty);

    const updatedCart = await updateCart(cart.id, {merge: false, products});

    return updatedCart;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message);
    }

    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }

    return rejectWithValue('Update cart failed');
  }
},
{condition: ({productId}, {getState}) => {
  const state = getState() as RootState;
  return !state.userSlice.cartUpdating[productId];
}}
);