import { configureStore } from "@reduxjs/toolkit";
import piscokCart from "./piscokCart";

export default configureStore({
  reducer: {
    cart: piscokCart,
  },
});
