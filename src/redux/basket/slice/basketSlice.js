import { createSlice } from "@reduxjs/toolkit";
import {CalcTotalPrice} from "@/utils/CalcTotalPrice.js";

const initialState = {
    items: [],
    error: undefined,
    isLoading: false,
    totalPrice: 0,
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addItem(state, action) {

            const item = state.items.find((res) => {
                return JSON.stringify(res) === JSON.stringify(action.payload)
            })

            if (item) {
                item.count++
            } else {
                state.items.push(action.payload);
            }

            state.totalPrice = CalcTotalPrice(state.items)
        },
        minusItem(state, action) {

            const item = state.items.find((res) => {
                return JSON.stringify(res) === JSON.stringify(action.payload)
            })

            if (item.count > 1) {
                item.count--
            } else {
                 state.items = state.items.filter((res) => {
                    return JSON.stringify(res) !== JSON.stringify(action.payload)
                })
            }

            state.totalPrice = CalcTotalPrice(state.items)
        }
    },
});

export const { actions: basketActions } = basketSlice;
export const { reducer: basketReducer } = basketSlice;
