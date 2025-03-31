import { createSlice } from "@reduxjs/toolkit";

const piscokCart = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const id = action.payload.id;
      const item = state.value.find((item) => item.id === id);

      // Jika item belum ada, tambahkan ke keranjang
      if (!item) {
        state.value.push(newItem);
      } else {
        // Jika item sudah ada, tambahkan jumlahnya
        item.quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      // Menghapus item berdasarkan id
      state.value = state.value.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const item = state.value.find((item) => item.id === action.payload.id);
      if (item) {
        // Menambah jumlah item
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const newItem = action.payload;
      const id = action.payload.id;
      const item = state.value.find((item) => item.id === id);
      if (item) {
        if (item.quantity > 1) {
          // Mengurangi jumlah item jika jumlah lebih dari 1
          item.quantity -= 1;
        }
        // Jika ingin menghapus item ketika jumlah mencapai 0,
        // uncomment blok kode berikut:
        else {
          state.value = state.value.filter((item) => item.id !== id);
        }
      }
    },
  },
});

export default piscokCart.reducer;

// Perbaikan: Hapus ekspor 'showModal' karena tidak didefinisikan di dalam reducers.
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  piscokCart.actions;

export const totalJumlahBarang = (state) =>
  state.cart.value.reduce((acc, current) => acc + current.quantity, 0);

export const totalJumlahHarga = (state) =>
  state.cart.value.reduce(
    (acc, current) => acc + current.quantity * current.price,
    0,
  );
