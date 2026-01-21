import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import { dummyApi } from "api/dummyApi";
import { authApi } from "api/authApi";

const rootReducer = combineReducers({
    [dummyApi.reducerPath]: dummyApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    userSlice,
})

export const setupStore = () => configureStore({
    reducer: rootReducer,
    middleware: (getDeault) => getDeault().concat(dummyApi.middleware, authApi.middleware),
    devTools: true
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];