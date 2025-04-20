import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import HeroImg from "../assets/hero_img.jpg";
import HeroImg02 from "../assets/hero_img_02.jpg";

export default function Hero() {
  return (
    <motion.section
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="text-gray-600 bg-slate-100 body-font min-h-80"
    >
      <div className="container mx-auto  px-5 py-24 ">
        {/* hero 1 */}
        <div className=" flex md:flex-row flex-col items-center mb-20 md:mb-36">
          <div className="mx-auto md:w-1/2  w-5/6 mb-10 md:mb-0">
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
              Kombinasi pisang pilihan + coklat premium yang bikin hari-hari
              lebih manis. Limited stock!
            </p>
            <div className="flex justify-center">
              <Link to={"menu"} type="button" className=" button-primary">
                BELI SEKARANG
              </Link>
            </div>
          </div>
        </div>
        {/* hero 2 */}
        <div className="  flex md:flex-row flex-col-reverse items-center">
          <div className="md:w-1/2 lg:pr-24 md:pr-16 lg:flex-grow  flex flex-col md:items-start md:text-left items-center text-center">
            <h2 className=" sm:text-4xl text-2xl mb-4 font-bold text-gray-900 ">
              Bisa dibawa kemana-kemana
            </h2>

            <p className="mb-8">
              Bisa dimakan dimana pun dan kapan pun bareng keluarga dan teman
              tongkronganmu
            </p>
          </div>
          <div className="mx-auto md:w-1/2  w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="gambar piscok - hero"
              src={HeroImg}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
