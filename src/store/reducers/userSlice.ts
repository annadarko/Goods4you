import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCartsByUser } from "./actionCreators";
import type { CartsData } from "api/user-api";

interface InitialState {
  user: CartsData;
  isLoading: boolean;
  error: string;
}

const initialState: InitialState = {
  user: {carts: []},
  isLoading: false,
  error: "",
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
      );
  },
  selectors: {
    selectFirstCart: (state) => state.user.carts[0] ?? null,
    selectCartTotalQuantity: (state) => state.user.carts[0]?.totalQuantity ?? 0,
    selectShowBadge: (state) => (state.user.carts[0]?.totalQuantity ?? 0) > 0,
  },
});

export const {
  selectFirstCart,
  selectCartTotalQuantity,
  selectShowBadge,
} = userSlice.selectors;

export default userSlice.reducer;