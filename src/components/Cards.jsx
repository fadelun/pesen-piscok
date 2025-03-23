import React from "react";
import { useState } from "react";
import piscokProducts from "../data/products";
import ProductImg from "../assets/product_1.jpg";

export default function Cards() {
  const [PRODUCTS, setPRODUCTS] = useState(piscokProducts);

  const slicedProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 gap-4">
          {slicedProducts.map((product) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
