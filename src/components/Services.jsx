import React from "react";

export default function Services() {
  return (
    <section className="m-4 dark:bg-gray-800 dark:text-gray-100 md:m-8">
      {" "}
      <div className="container mx-auto my-6 space-y-2 p-4 text-center">
        {" "}
        <h2 className="text-5xl font-bold text-rose-400">Our Services</h2>{" "}
      </div>{" "}
      <div className="container mx-auto grid justify-center gap-4 md:grid-cols-3">
        {" "}
        <div className="flex max-w-xs flex-col items-center px-10">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-rose-400"
          >
            {" "}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
            ></path>{" "}
          </svg>{" "}
          <h3 className="my-3 text-3xl font-semibold text-gray-900 dark:text-gray-400">
            Variasi Pilihan Isi & Harga Terjangkau
          </h3>{" "}
          <div className="space-y-1 px-5 text-center leading-tight text-gray-600 dark:text-gray-400">
            {" "}
            <p>
              Pilih sesuai selera dan kebutuhan! Kami menyediakan varian isi 5
              dan isi 7 dengan harga yang bersahaba
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex max-w-xs flex-col items-center px-10">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-rose-400"
          >
            {" "}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
            ></path>{" "}
          </svg>{" "}
          <h3 className="my-3 text-3xl font-semibold text-gray-900 dark:text-gray-400">
            Langsung antar ke tempat
          </h3>{" "}
          <div className="space-y-1 px-5 text-center leading-tight text-gray-600 dark:text-gray-400">
            {" "}
            <p>
              Anda tidak perlu lagi capek-capek untuk datan ke tokoh, cukup
              pesan dan kami langsung antar di tempat
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="flex max-w-xs flex-col items-center px-10">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-rose-400"
          >
            {" "}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
            ></path>{" "}
          </svg>{" "}
          <h3 className="my-3 text-3xl font-semibold text-gray-900 dark:text-gray-400">
            Proses Produksi yang Higienis
          </h3>{" "}
          <div className="space-y-1 px-5 text-center leading-tight text-gray-600 dark:text-gray-400">
            {" "}
            <p>
              {" "}
              Kami menjamin standar produksi tertinggi dengan proses higienis
              dan teknologi modern untuk menjaga kualitas produk.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </section>
  );
}
