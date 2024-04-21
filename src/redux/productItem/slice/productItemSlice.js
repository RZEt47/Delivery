import { createSlice } from "@reduxjs/toolkit";
import { fetchProductItem } from "../servieces/fetchProductItem";

const initialState = {
  product: [],
  isLoading: false,
  errors: null,
  size: undefined,
  price: undefined,
  type: undefined,
  quantity: undefined,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSize(state, action) {
      state.size = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setPrice(state, action) {
      state.price = action.payload;
    },
    setQuantity(state, action) {
      state.quantity = action.payload;
    },
    clearProduct(state) {
      state.size = undefined;
      state.type = undefined;
      state.price = undefined;
      state.quantity = undefined;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProductItem.pending, (state) => {
      state.errors = null;
      state.isLoading = true;
    });
    builder.addCase(fetchProductItem.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProductItem.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
  },
});

export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;
