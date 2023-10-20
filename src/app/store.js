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
import bulletReducer from "../features/variant/bulletSlide";
import hashtagReducer from "../features/variant/hashtagSlide";
import productReducer from "../features/variant/productSide";
import shopReducer from "../features/variant/shopSlide";
import commentReducer from "../features/coment_review/commentSlide";
import reviewReducer from "../features/coment_review/reviewSlide";
import sellerStoreReducer from "../features/sellerStore/sellerStoreSlice";


const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const userPersistedReducer = persistReducer(persistConfig, userReducer);
const sellerStorePersistedReducer = persistReducer(persistConfig, sellerStoreReducer);

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    sellerStore: sellerStorePersistedReducer,
    variant: variantReducer,
    user: userPersistedReducer,
    bullet: bulletReducer,
    hashtag: hashtagReducer,
    product: productReducer,
    shop: shopReducer,
    comment: commentReducer,
    review: reviewReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
