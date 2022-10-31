import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlice";
import { apiSlice } from "../apis/apiSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import orderReducer from "../features/order/orderSlice";
//Nguyên
import cartReducer from "../features/cart/cartSlice";
import productReducer from "../features/product/productSlice";

// persistConfig
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};
const reducers = combineReducers({
  // authentication
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  //cart
  cart: cartReducer,
  // order
  order: orderReducer,
  //compare products
  product: productReducer,
});
export default persistReducer(persistConfig, reducers);
