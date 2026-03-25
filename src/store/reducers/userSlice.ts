import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCartsByUser, updateCartItem } from "./actionCreators";
import type { CartsData } from "api/user-api";
import type { RootState } from 'store/store';

interface InitialState {
  user: CartsData;
  isLoading: boolean;
  error: string;
  cartUpdating: Record<number, boolean>;
}

const initialState: InitialState = {
  user: {carts: []},
  isLoading: false,
  error: "",
  cartUpdating: {},
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartsByUser.pending.type, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(
        fetchCartsByUser.fulfilled.type,
        (state, action: PayloadAction<CartsData>) => {
          state.isLoading = false;
          state.user = action.payload;
        },
      )
      .addCase(
        fetchCartsByUser.rejected.type,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      )

      .addCase(
        updateCartItem.pending, (state, action) => {
          const {productId} = action.meta.arg;
          state.cartUpdating[productId] = true;
          state.error = '';
        }
      )
      .addCase(
        updateCartItem.fulfilled, (state, action) => {
          const {productId} = action.meta.arg;
          state.cartUpdating[productId] = false;
          if (state.user.carts.length === 0) state.user.carts = [action.payload];
          else state.user.carts[0] = action.payload;
        }
      )
      .addCase(
        updateCartItem.rejected, (state, action) => {
          const {productId} = action.meta.arg;
          state.cartUpdating[productId] = false;
          state.error = (action.payload as string) ?? 'Update cart failed';
        }
      );
  },
  selectors: {
    selectFirstCart: (state) => state.user.carts[0] ?? null,
    selectCartTotalQuantity: (state) => state.user.carts[0]?.totalQuantity ?? 0,
    selectShowBadge: (state) => (state.user.carts[0]?.totalQuantity ?? 0) > 0,
    //selectIsCartUpdatingById: (state) => (productId: number) => !!state.cartUpdating[productId],
  },
});

export const selectIsCartUpdatingById = (state: RootState, productId: number) => !!state.userSlice.cartUpdating[productId];

export const {
  selectFirstCart,
  selectCartTotalQuantity,
  selectShowBadge,
  //selectIsCartUpdatingById,
} = userSlice.selectors;

export default userSlice.reducer;