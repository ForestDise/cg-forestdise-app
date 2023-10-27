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
import productReducer from "../features/variant/productSlide";
import shopReducer from "../features/variant/shopSlide";
import commentReducer from "../features/coment_review/commentSlide";
import reviewReducer from "../features/coment_review/reviewSlide";
import sellerStoreReducer from "../features/sellerStore/sellerStoreSlice";
import sellerReducer from "../features/seller/sellerSlice";
import categoryReducer from "../features/variant/categorySlide";
import homeReducer from "../features/home/homeSlice";
import storeCategoryReducer from "../features/variant/storeCategorySlide"
import optionReducer from "../features/variant/optionSlide"
import optionValueReducer from "../features/variant/optionValueSlide"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const userPersistedReducer = persistReducer(persistConfig, userReducer);
const sellerStorePersistedReducer = persistReducer(persistConfig, sellerStoreReducer);
const cartPersistedReducer = persistReducer(persistConfig, cartReducer);
export const store = configureStore({
  reducer: {
    home: homeReducer,
    cart: cartPersistedReducer,
    sellerStore: sellerStorePersistedReducer,
    variant: variantReducer,
    user: userPersistedReducer,
    bullet: bulletReducer,
    hashtag: hashtagReducer,
    product: productReducer,
    shop: shopReducer,
    comment: commentReducer,
    review: reviewReducer,
    seller: sellerReducer,
    category: categoryReducer,
    storeCategory: storeCategoryReducer,
    option: optionReducer,
    optionValue: optionValueReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
