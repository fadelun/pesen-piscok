import { createSlice } from "@reduxjs/toolkit";

const piscokCart = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.value.find((item) => item.id === action.payload.id);

      // jika ada item yang sama maka tambahkan amount
      if (item) {
        item.amount += 1;
      } else {
        // jika belum ada item maka tambahkan item tersebut
        state.value.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      // menghapus item sesuai dengan id-nya
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const item = state.value.find((item) => item.id === action.payload.id);
      if (item) {
        item.amount += 1; // Tambah amount
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.value.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.amount > 1) {
          item.amount -= 1; // Kurangi amount
        } else {
          state.value = state.value.filter(
            (item) => item.id !== action.payload.id,
          ); // Hapus item jika amount 0
        }
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  piscokCart.actions;

export const totalJumlahBarang = (state) =>
  state.cart.value.reduce((acc, current) => acc + current.amount, 0);
export const totalJumlahHarga = (state) =>
  state.cart.value.reduce((acc, current) => acc + current.price, 0);
