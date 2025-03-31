import { Link } from "react-router";
import { Instagram, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  const links = [
    { icon: <Instagram />, to: "https://www.instagram.com/fadelun_10/" },
    { icon: <Linkedin />, to: "https://www.linkedin.com/in/muhammadfadll" },
    { icon: <Globe />, to: "https://fadelun.my.id/" },
  ];

  const openWA = "https://wa.me/+6281271269864?";

  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <Link to="/" className="text-2xl font-bold text-yellow-500  ">
          🍌 PesenPiscok
        </Link>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
          Punya pertanyaan?
          <Link to={openWA} target="_blank">
            {" "}
            hubungi kami
          </Link>
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              href="#"
            >
              About
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              href="#"
            >
              Careers
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              href="#"
            >
              History
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              href="#"
            >
              Services
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              href="#"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              href="#"
            >
              Blog
            </a>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          {links.map((item, i) => (
            <li key={i}>
              <Link
                to={item.to}
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
