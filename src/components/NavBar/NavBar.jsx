import { useState } from "react";
import logo from "../../assets/logo/piuweb.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <nav className="bg-gray-800 h-auto px-2 py-8">
      {/* Menú principal */}
      <div className="flex items-center justify-around mx-4 p-1">
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            src={logo}
            alt="Dev Company"
          />
        </div>

        {/* Botón de menú móvil */}
        <div className="customMedia:hidden">
          <button
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            onClick={toggleMenu}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
        </div>

        {/* Menú en pantallas grandes */}
        <div className="hidden customMedia:block">
          <div className="flex space-x-2 font-mono text-[14px]">
            <a
              href="#"
              className="rounded-md bg-gray-900 px-3 py-2 text-white hover:bg-gray-700"
            >
              Inicio
            </a>
            <a
              href="#"
              className="rounded-md bg-gray-900 px-3 py-2 text-white hover:bg-gray-700"
            >
              Sobre mi
            </a>
            <a
              href="#"
              className="rounded-md bg-gray-900 px-3 py-2 text-white hover:bg-gray-700"
            >
              Skill
            </a>
            <a
              href="#"
              className="rounded-md bg-gray-900 px-3 py-2  text-white hover:bg-gray-700"
            >
              Projectos
            </a>
            <a
              href="#"
              className="rounded-md bg-gray-900 px-3 py-2  text-white hover:bg-gray-700"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div className="customMedia:hidden" id="mobile-menu">
          <div className="flex flex-col items-center px-2 pb-3 pt-2 mt-8 font-mono text-[14px]">
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Inicio
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
             Sobre Mi
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Skill
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projectos
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
