import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/piscokCart";
import formatPrice from "../utils/formatPrice";

import { ToastContainer, toast, Bounce } from "react-toastify";

import ProductImg from "../assets/product_1.jpg";

export default function Cards({ products }) {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const dispatch = useDispatch();

  const handleAddToCart = ({ id, title, price, count, amount }) => {
    if ((id, title)) {
      dispatch(addToCart({ id, title, price, count, amount }));
      toast.success(`Berhasil memasukkan ke keranjang`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error(`Gagal memasukkan ke keranjang`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <section className="body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-left mb-8">
          Menu
        </h2>
        <div className=" grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3  gap-4">
          {products.map(({ id, title, count, price }) => (
            <div
              key={id}
              className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
            >
              <img
                src={ProductImg}
                alt="gambar piscok"
                className="object-cover object-center w-full rounded-t-md h-68 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-4 space-y-2">
                <div className=" text-left">
                  <p className="text-2xl font-semibold ">{title}</p>
                  <p className="text-xl font-semibold text-slate-500 tracking-wide mb-4">
                    isi {count}
                  </p>
                  <h3 className="text-3xl font-bold">
                    Rp {formatPrice(price)}
                  </h3>
                </div>
                <button
                  type="button"
                  className="button-primary"
                  onClick={() =>
                    handleAddToCart({ id, title, price, count, amount: 1 })
                  }
                >
                  Pesan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
