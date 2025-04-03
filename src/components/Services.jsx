import { motion } from "motion/react";
import serviceImg1 from "../assets/service_1.png";
import serviceImg2 from "../assets/service_2.png";
import serviceImg3 from "../assets/service_3.png";

export default function Services() {
  return (
    <section className=" bg-primary text-chocolate py-12 mt-8 text-white">
      {" "}
      <div className="container mx-auto my-8 space-y-2 p-4 text-center">
        {" "}
        <h2 className="text-5xl font-bold text-dark">Our Services</h2>{" "}
      </div>{" "}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="container mx-auto grid justify-center gap-10 md:gap-4 md:grid-cols-3"
      >
        {" "}
        <div className="flex  flex-col items-center justify-center px-10">
          {" "}
          <img src={serviceImg1} alt="serivice 1" className="max-w-38" />
          <h3 className="my-3 text-3xl font-semibold text-dark">
            Variasi Pilihan Isi & Harga Terjangkau
          </h3>{" "}
          <div className="space-y-1 px-5 text-center leading-tight ">
            {" "}
            <p>
              Pilih sesuai selera dan kebutuhan! Kami menyediakan varian isi 5
              dan isi 7 dengan harga yang bersahaba
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex  flex-col items-center justify-center px-10">
          <img src={serviceImg2} alt="serivice 2" className="max-w-38" />
          <h3 className="my-3 text-3xl font-semibold text-dark">
            Langsung antar ke tempat
          </h3>{" "}
          <div className="space-y-1 px-5 text-center leading-tight ">
            {" "}
            <p>
              Anda tidak perlu lagi capek-capek untuk datan ke tokoh, cukup
              pesan dan kami langsung antar di tempat
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex  flex-col items-center justify-center px-10">
          <img src={serviceImg3} alt="serivice 3" className="max-w-38" />
          <h3 className="my-3 text-3xl font-semibold text-dark">
            Proses Produksi yang Higienis
          </h3>{" "}
          <div className="space-y-1 px-5 text-center leading-tight ">
            {" "}
            <p>
              {" "}
              Kami menjamin standar produksi tertinggi dengan proses yang bersih
              dan higienis.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </motion.div>
    </section>
  );
}
