import { useSelector, useDispatch } from "react-redux";
import { Trash2 } from "lucide-react";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  totalJumlahHarga,
} from "../store/cartSlice";

import formatPrice from "../utils/formatPrice";
import Swal from "sweetalert2";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.value);
  const totalHarga = useSelector(totalJumlahHarga);
  const dispatch = useDispatch();

  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseQuantity({ id: item.id }));
    } else {
      handleRemoveItem({ id: item.id });
    }
  };

  const handleRemoveItem = ({ id }) => {
    Swal.fire({
      title: "Kamu Yakin",
      text: "Barang ini akan hilang dari keranjang!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya hapus",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart({ id }));
        Swal.fire({
          title: "Berhasil menghapus",
          icon: "success",
        });
      }
    });
  };

  const generateWhatsAppMessage = () => {
    const itemsText = cartItems
      .map(
        (item) =>
          `- ${item.title}(${item.count}) : ${item.quantity} x ${item.price}`,
      )
      .join("\n");

    return `Halo, saya ingin memesan:\n${itemsText} \n *Total: ${totalHarga}*`;
  };

  // Handle checkout WhatsApp
  const handleMessageCheckout = () => {
    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "6281271269864";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  const handleCheckout = () => {
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
        setTimeout(() => {
          handleMessageCheckout();
        }, 1000);
        Swal.fire({
          title: "Checkout Berhasil!",
          text: "Terima kasih atas pembelian Anda!",
          icon: "success",
        });
      }
    });
  };

  return (
    <section>
      {cartItems.length > 0 ? (
        <div className="mx-auto min-h-[80vh] max-w-screen-xl px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Isi Keranjang 🛒
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
                {cartItems.length > 0 ? (
                  cartItems.map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="size-20 md:size-48 rounded-sm object-cover"
                      />

                      <div className="text-start flex flex-col">
                        <h3 className="text-md md:text-xl text-gray-900 md:mb-2">
                          {item.title}
                        </h3>

                        <div className="mb-4 md:mb-8 space-y-px text-sm text-gray-600">
                          Isi: {item.count}
                        </div>

                        <div className="text-md md:text-2xl">
                          Rp {formatPrice(item.price)}
                        </div>
                      </div>

                      <div className="flex flex-1 items-center justify-end gap-2">
                        <div className="flex justify-center gap-2">
                          <button
                            className="text-gray-700 bg-gray-200 px-2  rounded-sm hover:cursor-pointer"
                            onClick={() => handleDecreaseQuantity(item)}
                          >
                            -
                          </button>

                          <p className="w-6 ">{item.quantity}</p>
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
                  <div className="flex flex-1 flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                      <div className="flex flex-col items-center">
                        {/* Icon Keranjang */}
                        <div className="mb-4 p-6 bg-gray-50 rounded-full shadow-lg">
                          <ShoppingCartIcon className="w-24 h-24 text-gray-300" />
                        </div>

                        {/* Teks */}
                        <h2 className="mt-6 text-2xl font-bold text-gray-900 text-center">
                          Your cart is empty
                        </h2>
                        <p className="mt-2 text-sm text-gray-500 text-center">
                          Looks like you haven't added any items to your cart
                          yet
                        </p>

                        {/* CTA Button */}
                        <div className="mt-8">
                          <a
                            href="/products"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                          >
                            Start Shopping
                            <svg
                              className="ml-2 -mr-1 h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </ul>
              <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="space-y-0.5 text-sm text-gray-700">
                    <div className="flex justify-between text-xl md:text-2xl font-medium">
                      <dt>Total</dt>
                      <dd>Rp {formatPrice(totalHarga)}</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <button
                      onClick={() => handleCheckout()}
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
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="flex flex-col items-center">
              <div className="mb-4 p-6 bg-gray-50 rounded-full shadow-lg">
                🛒
              </div>

              {/* Teks */}
              <h2 className="mt-6 text-2xl font-bold text-gray-900 text-center">
                Keranjang masih kosong
              </h2>
              <p className="mt-2 text-sm text-gray-500 text-center">
                Hey, sepertinya kamu belum menambahkan apapun ke dalam keranjang
              </p>

              {/* CTA Button */}
              <div className="mt-8">
                <a
                  href="/menu"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                >
                  Belanja dulu
                  <svg
                    className="ml-2 -mr-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

{
  /* <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
<div className="w-screen max-w-lg space-y-4">
  <dl className="space-y-0.5 text-sm text-gray-700">
    <div className="flex justify-between text-2xl font-medium">
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
</div> */
}
