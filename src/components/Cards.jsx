import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import formatPrice from "../utils/formatPrice";

import { ToastContainer, toast, Bounce } from "react-toastify";

export default function Cards({ products }) {
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    if ((item.id, item.title)) {
      dispatch(addToCart(item));
      toast.success(`Berhasil memasukkan ke keranjang`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error(`Gagal memasukkan ke keranjang`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <section className="my-8 container mx-auto px-4">
      <div className=" grid  gap-6 grid-cols-2 lg:grid-cols-4  md:grid-cols-3 place-items-center  ">
        {products.map(({ id, title, image, count, price }) => (
          <div
            key={id}
            className="max-w-sm border border-primary/75 w-full bg-white rounded-lg shadow-md overflow-hidden mx-2 my-4 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Gambar Produk */}
            <img
              className="w-full h-42 md:h-86 object-cover rounded-t-lg"
              src={image}
              alt={title}
            />

            {/* Konten Card */}
            <div className="py-2 px-3 md:p-5 text-left md:text-center">
              {/* Judul */}
              <h3 className=" text-sm md:text-xl font-semibold text-gray-800 md:mb-2 truncate">
                {title}
              </h3>
              <p className="text-xs md:text-xl font-semibold text-slate-500 tracking-wide mb-2 md:mb-4">
                isi {count}
              </p>

              {/* Harga */}
              <p className="text-md md:text-2xl font-bold text-dark mb-2 md:mb-4">
                Rp{formatPrice(price)}
              </p>

              {/* Tombol Pesan */}
              <button
                onClick={() =>
                  dispatch(
                    handleAddToCart({
                      id,
                      title,
                      image,
                      price,
                      count,
                      quantity: 1,
                    }),
                  )
                }
                className="button-card"
              >
                <span className="hidden md:inline">Pesan Sekarang</span>
                <span className="inline md:hidden">Pesan</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </section>
  );
}
