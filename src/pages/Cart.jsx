import { useSelector, useDispatch } from "react-redux";
import { Trash2 } from "lucide-react";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  totalJumlahHarga,
  totalJumlahBarang,
} from "../store/piscokCart";

import formatPrice from "../utils/formatPrice";
import ProductImg from "../assets/product_1.jpg";
import Swal from "sweetalert2";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.value);
  const totalBarang = useSelector(totalJumlahBarang);
  const totalHarga = useSelector(totalJumlahHarga);
  const dispatch = useDispatch();

  const showModal = () => {
    Swal.fire({
      title: "Checkout Berhasil",
      text: "Terima kasih atas pembelian Anda!",
      icon: "success",
    });
  };

  const handleModalChekout = () => {
    Swal.fire({
      title: "Kamu Yakin?",
      text: `Total belanjaanmu Rp ${formatPrice(
        totalHarga,
      )} yakin mau melanjutkkan`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
      cancelButtonText: "Eh, bentar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Checkout Berhasil!",
          text: "Terima kasih atas pembelian Anda!",
          icon: "success",
        });
      }
    });
  };

  const handleRemoveItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // dispatch(removeFromCart({ id: item.id })
      if (result.isConfirmed) {
        dispatch(removeFromCart(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <img
                      src={ProductImg}
                      alt=""
                      className="size-16 rounded-sm object-cover"
                    />

                    <div>
                      <h3 className="text-sm text-gray-900">{item.title}</h3>

                      <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                        <div>{item.count}</div>

                        <div>Rp {formatPrice(item.price)}</div>
                      </dl>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      <div className="flex justify-center gap-2">
                        <button
                          className="text-gray-700 bg-gray-200 px-2  rounded-sm hover:cursor-pointer"
                          onClick={() =>
                            dispatch(decreaseQuantity({ id: item.id }))
                          }
                        >
                          -
                        </button>

                        <p className="w-6 ">{item.amount}</p>
                        <button
                          className="text-gray-700 bg-gray-200 px-2  rounded-sm hover:cursor-pointer"
                          onClick={() =>
                            dispatch(increaseQuantity({ id: item.id }))
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemoveItem({ id: item.id })}
                        className="text-gray-600 transition hover:text-red-600 hover:cursor-pointer"
                      >
                        <Trash2 />
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <p>kosong dell</p>
              )}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between !text-base font-medium">
                    <dt>Total</dt>
                    <dd>Rp {formatPrice(totalHarga)}</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <button
                    onClick={handleModalChekout}
                    className="block  rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600 hover:cursor-pointer"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
