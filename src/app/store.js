import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "../features/cart/cartSlice";
import variantReducer from "../features/variant/variantSlice";
import userReducer from "../features/user/userSlice";
import searchProductReducer from "../features/search/searchProductSlice"; // Import reducer của bạn

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};


const cartPersistedReducer = persistReducer(persistConfig, cartReducer);
const userPersistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    cart: cartPersistedReducer,
    variant: variantReducer,
    user: userPersistedReducer,
    searchProduct: searchProductReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
