import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import Cards from "../components/Cards";

import { useState } from "react";
import piscokProducts from "../data/products";

export default function Home() {
  const [PRODUCTS, setPRODUCTS] = useState(piscokProducts);

  const slicedProducts = PRODUCTS.slice(0, 4);

  return (
    <>
      <Hero />
      <Cards products={slicedProducts} />
      <Pricing />
      <Services />
    </>
  );
}
