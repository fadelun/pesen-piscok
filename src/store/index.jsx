import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import piscokCart from "./piscokCart";

export default configureStore({
  reducer: {
    cart: piscokCart,
    modal: modalSlice,
  },
});
