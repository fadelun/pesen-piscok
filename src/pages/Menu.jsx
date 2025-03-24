import { useState } from "react";

import Cards from "../components/Cards";
import piscokProducts from "../data/products";

export default function Menu() {
  const [PRODUCTS, setPRODUCTS] = useState(piscokProducts);

  return (
    <div className="container mx-auto ">
      <Cards products={PRODUCTS} />
    </div>
  );
}
