import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import HeroImg02 from "../assets/hero_img_02.jpg";

export default function Hero() {
  return (
    <motion.section
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="text-gray-600 bg-slate-100 body-font min-h-80"
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className=" md:w-1/2  w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="gambar piscok - hero"
            src={HeroImg02}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className=" sm:text-5xl text-3xl mb-4 font-bold text-gray-900">
            Piscok Renyah, Lumer di Hati!
          </h1>

          <p className="mb-8">
            Kombinasi pisang pilihan + coklat premium yang bikin hari-hari lebih
            manis. Limited stock!
          </p>
          <div className="flex justify-center">
            <Link to={"menu"} type="button" className=" button-primary">
              BELI SEKARANG
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
