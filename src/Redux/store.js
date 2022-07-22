import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Shopping/cartSlice";
import cartUiSlice from "./Shopping/cartUiSlice"
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer
    },
});

export default store