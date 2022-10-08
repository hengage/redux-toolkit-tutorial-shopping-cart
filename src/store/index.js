import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cart.slice";
import modalReducer from "../features/modal/modal.slice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer
    }
})