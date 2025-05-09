import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./context/cartSlice";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

export default appStore;