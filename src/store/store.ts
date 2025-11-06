import { combineReducers, configureStore } from "@reduxjs/toolkit";
import catalogProductSlice from "./reducers/catalogProducteSlice";
import userSlice from "./reducers/userSlice";
import productInfoSlice from "./reducers/productInfoSlice";

const rootReducer = combineReducers({
    catalogProductSlice,
    userSlice,
    productInfoSlice,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];