import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "models/Product";
import { fetchProductsInfo } from "./actionCreators";

interface InitialState {
    products: Product;
    isLoading: boolean;
    error: string
}

const product: Product = {
    id: 0,
    title: '',
    price: 0,
    thumbnail: "",
    quantity: 0,
    warrantyInformation: "",
    description: "",
    stock: 0,
    shippingInformation: "",
    discountPercentage: 0,
};

const initialState: InitialState = {
    products: product,
    isLoading: false,
    error: '',
};

export const productInfoSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase (fetchProductsInfo.pending.type, (state) => {
                state.isLoading = true;
                state.error = '';
            })
            .addCase (
                fetchProductsInfo.fulfilled.type,
                (state, action: PayloadAction<Product>) => {
                    state.isLoading = false;
                    state.products = action.payload;
                },
            )
            .addCase(
                fetchProductsInfo.rejected.type,
                (state, action: PayloadAction<string>) => {
                    state.isLoading = false;
                    state.error = action.payload;
                },
            );
    },
});

export default productInfoSlice.reducer;