import Hero from "../components/Hero";
import Services from "../components/Services";
import Cards from "../components/Cards";

import { useState } from "react";
import { Link } from "react-router";
import { ChevronsRight } from "lucide-react";
import piscokProducts from "../data/products";

export default function Home() {
  const [PRODUCTS, setPRODUCTS] = useState(piscokProducts);

  const slicedProducts = PRODUCTS.slice(0, 4);

  return (
    <main>
      <Hero />

      <section className="container mx-auto menu pb-16 pt-12">
        <h2 className="text-2xl md:text-5xl font-bold mb-4">Popular Menu</h2>{" "}
        <Cards products={slicedProducts} />
        <Link type="button" to="menu" className="button-secondary ">
          Tampilkan lebih banyak <ChevronsRight className="inline" />
        </Link>
      </section>

      <Services />
    </main>
  );
}
