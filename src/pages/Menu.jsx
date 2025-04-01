import { useState } from "react";

import Cards from "../components/Cards";
import piscokProducts from "../data/products";
import menuBg from "../assets/menu_bg.jpg";

export default function Menu() {
  const [PRODUCTS, setPRODUCTS] = useState(piscokProducts);

  const backgroundStyle = {
    background: `linear-gradient(rgba(33, 34, 69, .6980392156862745), rgba(33,34,69,.6980392156862745) ), url(${menuBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="font-body">
      <div
        style={backgroundStyle}
        className=" max-h-42 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
      >
        <h1 className="text-xl font-bold text-white sm:text-3xl">Menu</h1>
      </div>
      <div className="container mx-auto pt-6">
        <Cards products={PRODUCTS} />
      </div>
    </div>
  );
}
