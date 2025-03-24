import React from "react";

import ProductImg from "../assets/product_1.jpg";

export default function Cards({ products }) {
  return (
    <section className=" body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-left mb-8">
          Menu
        </h2>
        <div className=" grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className=" rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800"
            >
              <img
                src={ProductImg}
                alt="gambar piscok"
                className="object-cover object-center w-full rounded-t-md h-68 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-4 space-y-2">
                <div className=" text-left">
                  <h3 className="text-2xl font-semibold ">{product.title}</h3>
                  <p className="text-xl font-semibold text-slate-500 tracking-wide mb-4">
                    isi - {product.count}
                  </p>
                  <p className="text-3xl font-bold">Rp{product.price}</p>
                </div>
                <button
                  type="button"
                  className="group hover:cursor-pointer relative inline-block text-sm font-medium text-white focus:ring-3 focus:outline-hidden  rounded-md "
                >
                  <span className="absolute inset-0 border border-red-600"></span>
                  <span className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                    Pesan
                  </span>
                </button>
              </div>
            </div>
          ))}
          {/* {products.map((product) => (
            <div className="w-full   bg-orange-300">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={ProductImg}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-500 text-xl font-bold  title-font mb-1">
                  {product.title}
                </h2>
                <h3 className="text-gray-900 title-font tracking-widest text-xs ">
                  isi {product.count}
                </h3>
                <p className="mt-1">{product.price}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}
