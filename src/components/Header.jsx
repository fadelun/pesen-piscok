import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router";

import { useSelector } from "react-redux";
import { totalJumlahBarang } from "../store/cartSlice";

export default function Header() {
  const totalBarang = useSelector(totalJumlahBarang);
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/menu" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 bg-white shadow-md z-50">
        <nav className={` mx-auto max-w-[1540px] `}>
          <div className=" mx-auto px-4">
            <div className="flex justify-between h-16 items-center sm:px-6 lg:px-8">
              {/* Logo */}
              <div className="flex-1 flex items-center">
                <Link
                  to="/"
                  className="text-lg md:text-2xl font-bold text-yellow-500  "
                >
                  🍌 PesenPiscok
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:text-md md:flex items-center gap-x-12 mr-18">
                {navigation &&
                  navigation.map((item, id) => (
                    <NavLink
                      key={id}
                      to={item.link}
                      className={({ isActive }) =>
                        `text-dark transition hover:text-dark/75 block ${
                          isActive ? "font-bold" : "font-medium"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
              </div>
              <div
                className="flex rounded-full
    flex justify-center items-center relative"
              >
                <Link type="button" to={"/cart"}>
                  <ShoppingCart />
                </Link>
                <span
                  className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm
        w-5 h-5 rounded-full flex justify-center items-center"
                >
                  {totalBarang}
                </span>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden  bg-blue-200 flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? <Menu /> : <X />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `text-dark transition hover:text-dark/75 block ${
                        isActive ? "font-bold" : "font-semibold"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

// <div className=" bg-primary">
//       <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           <div className="flex-1 md:flex md:items-center md:gap-12">
//             <NavLink to="/" className="block text-teal-600">
//               <span className="sr-only">Home</span>
//               <img src={logoImg} alt="piscok logo" width={120} />
//             </NavLink>
//           </div>

//           <div className="md:flex md:items-center md:gap-12">
//             <nav aria-label="Global" className="hidden md:block">
//               <ul className="flex items-center gap-6 text-md">
//                 <li>
//                   <NavLink
//                     to="/menu"
//                     className={({ isActive }) =>
//                       isActive
//                         ? "text-dark font-bold transition hover:text-dark/75 "
//                         : "text-dark font-semibold transition hover:text-dark/75"
//                     }
//                   >
//                     {" "}
//                     Menu{" "}
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     to="/paket"
//                     className={`${({ isActive }) =>
//                       isActive
//                         ? "font-bold  "
//                         : "font-semibold "}text-dark transition hover:text-dark/75 `}
//                   >
//                     {" "}
//                     Paket{" "}
//                   </NavLink>
//                 </li>
//               </ul>
//             </nav>

//             <div className="flex items-center gap-4">
//               <div className="sm:flex sm:gap-4">
//                 <div className="hidden sm:flex">
//                   <button className="button-primary">Pesan</button>
//                 </div>
//               </div>

//               {/* Mobile menu button */}
//               <div className="md:hidden flex items-center">
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//                   aria-expanded="false"
//                 >
//                   <span className="sr-only">Open main menu</span>
//                   {!isOpen ? (
//                     <svg
//                       className="h-6 w-6"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M4 6h16M4 12h16M4 18h16"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       className="h-6 w-6"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isOpen && (
//             <div className="md:hidden">
//               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 {navigation.map((item) => (
//                   <NavLink
//                     key={item.name}
//                     href={item.href}
//                     className={`${
//                       activeLink === item.name
//                         ? "bg-blue-50 text-blue-600"
//                         : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
//                     } block px-3 py-2 rounded-md text-base font-medium`}
//                     onClick={() => {
//                       setActiveLink(item.name);
//                       setIsOpen(false);
//                     }}
//                   >
//                     {item.name}
//                   </NavLink>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
