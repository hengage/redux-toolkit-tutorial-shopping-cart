import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

import axios from 'axios'

const initialState = {
    cartItems: [],
    totalCartItems: 4,
    totalPrice: 0,
    isLoading: true,
};

export const getCartItems = createAsyncThunk('cart/getCartItems',
    async () => {
        try {
            const res = await axios.get(
                'https://course-api.com/react-useReducer-cart-project'
            )
            // console.log(res.data)
            return res.data
        }
        catch(error) {
            console.log('ERROR:', error.message)
        }

    }
)


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state => {
            state.cartItems = []
        }),
        removeItem: ((state, action) => {
            const itemID = action.payload
            state.cartItems = state.cartItems.filter((item) =>
                item.id !== itemID)
        }),
        increase: ((state, { payload }) => {
            const cartItem = state.cartItems.find((item) =>
                item.id === payload)
            cartItem.amount += 1
        }),
        decrease: ((state, { payload }) => {
            const cartItem = state.cartItems.find((item) =>
                item.id === payload.id)
            // console.log({ payload })
            if (cartItem.amount > 0) {
                cartItem.amount -= 1
            }

            return;
        }),
        calculateTotals: ((state) => {
            let totalCartItems = 0;
            let totalPrice = 0;

            state.cartItems?.forEach(item => {
                totalCartItems += item.amount
                totalPrice += item.amount * item.price

            });
            state.totalCartItems = totalCartItems
            state.totalPrice = totalPrice
        })
    },

    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false
            state.cartItems = action.payload
            console.log(state.cartItems)
            // state.cartItems.concat(action.payload)
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = true
        }
    }
})

export const {
    clearCart, removeItem, increase, decrease, calculateTotals
} = cartSlice.actions;

export const myCart = (state) => state.cart;


export default cartSlice.reducer