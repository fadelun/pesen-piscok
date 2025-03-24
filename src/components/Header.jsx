import { NavLink, Link } from "react-router";

export default function Header() {
  return (
    <header className=" p-8">
      <div className=" bg-primary">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <NavLink to="/" className="block text-teal-600">
                <span className="sr-only">Home</span>
                {/* <img src={logoImg} alt="" /> */}
              </NavLink>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <NavLink
                      to="/menu"
                      className={({ isActive }) =>
                        isActive
                          ? "text-gray-500 font-bold transition hover:text-gray-500/75 "
                          : "text-gray-500 font-semibold transition hover:text-gray-500/75"
                      }
                    >
                      {" "}
                      Menu{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/paket"
                      className={({ isActive }) =>
                        isActive
                          ? "text-gray-500 font-bold transition hover:text-gray-500/75 "
                          : "text-gray-500 font-semibold transition hover:text-gray-500/75"
                      }
                    >
                      {" "}
                      Paket{" "}
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                      href="#"
                    >
                      Pesan sekarang
                    </a>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
