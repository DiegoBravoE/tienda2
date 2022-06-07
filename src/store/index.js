import { configureStore } from "@reduxjs/toolkit";
import isLoading from "./slices/isLoading.slice";
import products from "./slices/products.slice";
import  purchase  from "./slices/Purchase.slice";
export default configureStore({
  reducer: {
    isLoading,
    products,
    purchase
  }
});
