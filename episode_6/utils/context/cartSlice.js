import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems: () => { },
        removeItems: () => { },
        clearCart: () => { },
    }
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;