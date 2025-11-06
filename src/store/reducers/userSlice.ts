import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "models/User";
import { fetchCartsByUser } from "./actionCreators";

interface CartsData {
  carts: User[];
}

interface InitialState {
  user: CartsData;
  isLoading: boolean;
  error: string;
}

const cartsData: CartsData = {
  carts: [],
};

const initialState: InitialState = {
  user: cartsData,
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "carts",
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
    selectValue: (state) => state.user.carts[0],
  },
});

export default userSlice.reducer;