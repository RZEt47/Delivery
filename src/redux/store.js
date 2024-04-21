import { configureStore } from "@reduxjs/toolkit";
import { rtkApi } from "@/api/rtkApi";
import { pizzasReducer } from "./pizzas/slice/pizzasSlice";
import { rollsReducer } from "./rolls/slice/rollsSlice";
import { othersReducer } from "./others/slice/pizzasSlice";
import { productReducer } from "./productItem/slice/productItemSlice";
import {basketReducer} from "@/redux/basket/slice/basketSlice.js";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, basketReducer)

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    rolls: rollsReducer,
    others: othersReducer,
    product: productReducer,
    basket: persistedReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(rtkApi.middleware),
});

export const persistor = persistStore(store);
