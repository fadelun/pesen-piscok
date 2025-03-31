import { useState } from "react";

import Cards from "../components/Cards";
import piscokProducts from "../data/products";

export default function Menu() {
  const [PRODUCTS, setPRODUCTS] = useState(piscokProducts);

  return (
    <div className=" mx-auto font-body ">
      <div className="container mx-auto pt-20">
        {/* <div className="container"></div> */}
        <Cards products={PRODUCTS} />
      </div>
    </div>
  );
}
