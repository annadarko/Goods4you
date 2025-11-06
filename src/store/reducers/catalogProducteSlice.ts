import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "models/Product";
import { fetchCatalogProduct } from "./actionCreators";

interface ProductsData {
    products: Product [];
    skip: number;
    total: number;
}

interface ProductState {
    catalogData: ProductsData;
    isLoading: boolean;
    error: string;
    skip: number;
    total: number;
}

const productsData: ProductsData = {
    products: [],
    skip: 0,
    total: 0,
};

const initialState: ProductState = {
    catalogData: productsData,
    isLoading: false,
    error: "",
    skip: 0,
    total: 0,
};

export const catalogProductSlice = createSlice ({
    name: 'products',
    initialState,
    reducers: {
        resetProducts(state) {
            state.catalogData.products = [];
            state.skip = 0;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalogProduct.pending.type, (state) => {
                state.isLoading = true;
            })
            .addCase(
                fetchCatalogProduct.fulfilled.type,
                (state, action: PayloadAction<ProductsData>) => {
                    state.isLoading = false;
                    state.error = "";
                    state.catalogData.products.push(...action.payload.products);
                    state.skip = action.payload.skip;
                    state.total = action.payload.total;
                },
            )
            .addCase(
                fetchCatalogProduct.rejected.type,
                (state, action: PayloadAction<string>) => {
                    state.isLoading = false;
                    state.error = action.payload;
                },
            );
    },
});

export const {resetProducts} = catalogProductSlice.actions;
export default catalogProductSlice.reducer;