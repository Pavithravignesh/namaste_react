import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./context/cartSlice";

const appStore = configureStore({
    reducer: {
        // reducer fn for cart
        cart: cartReducer,
    }
});

export default appStore;