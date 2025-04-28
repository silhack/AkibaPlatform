import React, { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaGlobe, FaLinkedinIn, FaTimes } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { NavLink } from "react-router"; // Correction ici

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean-up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 left-0 z-50">
      {/* Top Bar */}
      <div className="bg-normal-blue text-white flex justify-between items-center px-6 md:px-12 lg:px-16 py-3 text-sm md:text-base">
        <div className="hidden md:flex space-x-3 items-center">
          <div className="flex space-x-2 items-center">
            <MdOutlineMailOutline />
            <a href="mailto:info@akibasolution.com">info@akibasolution.com</a>
          </div>
          <h4>|</h4>
          <div className="flex space-x-2 items-center">
            <BsTelephone />
            <a href="/">+225 0123456789</a>
          </div>
        </div>
        <div className="flex space-x-3 items-center">
          <FiInstagram className="cursor-pointer hover:text-gray-300 transition" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-300 transition" />
          <FaFacebookF className="cursor-pointer hover:text-gray-300 transition" />
          <div className="flex space-x-2 items-center cursor-pointer">
            <FaGlobe />
            <h4>Français</h4>
          </div>
        </div>
      </div>

      {/* Navbar principale */}
      <div className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-16 bg-white shadow-md">
        <NavLink to="/" className="text-xl font-bold">
          Logo
        </NavLink>

        <div className="hidden md:flex flex-wrap gap-2 items-center justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-normal-blue font-bold"
                  : "hover:text-normal-blue-hover"
              } p-4 text-center`
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-normal-blue font-bold"
                  : "hover:text-normal-blue-hover"
              } p-4 text-center`
            }
          >
            Nos services
          </NavLink>

          {/* Dropdown Solutions & Produits */}
          <div
            className="relative w-fit h-fit"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="hover:text-normal-blue-hover flex items-center justify-center gap-2 transition duration-1000 p-4 text-center">
              Solutions & Produits
              <IoMdArrowDropdown />
            </button>
            {dropdownOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md mt-2 min-w-[200px] z-50">
                <NavLink
                  to="/solution"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  onClick={() => setDropdownOpen(false)}
                >
                  Notre Plateforme
                </NavLink>
                <NavLink
                  to="/produits"
                  className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  onClick={() => setDropdownOpen(false)}
                >
                  Produits accompagnés
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/actualites"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-normal-blue font-bold"
                  : "hover:text-normal-blue-hover"
              } p-4 text-center`
            }
          >
            Actualités
          </NavLink>

          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-normal-blue font-bold"
                  : "hover:text-normal-blue-hover"
              } p-4 text-center`
            }
          >
            À propos
          </NavLink>

          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-normal-blue font-bold"
                  : "hover:text-normal-blue-hover"
              } px-4 text-center`
            }
          >
            Contact
          </NavLink>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          <HiOutlineMenuAlt1 />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`fixed top-[44px] right-0 w-[80%] max-w-[320px] h-fit rounded-l-md bg-white shadow-lg z-50 transform transition-transform duration-300
                ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-2xl"
        >
          <FaTimes />
        </button>
        <div className="flex flex-col items-center space-y-6 py-5 mt-12 text-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-normal-blue font-bold"
                  : "hover:text-normal-blue-hover"
              } px-4 text-center`
            }
            onClick={() => setMenuOpen(false)}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-normal-blue font-bold"
                  : "hover:text-normal-blue-hover"
              } px-4 text-center`
            }
            onClick={() => setMenuOpen(false)}
          >
            Nos Services
          </NavLink>
          <NavLink
            to="/solution"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-normal-blue font-bold"
                  : "hover:text-normal-blue-hover"
              } px-4 text-center`
            }
            onClick={() => setMenuOpen(false)}
          >
            Notre Plateforme
          </NavLink>
          <NavLink
            to="/produits"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-normal-blue font-bold"
                  : "hover:text-normal-blue-hover"
              } px-4 text-center`
            }
            onClick={() => setMenuOpen(false)}
          >
            Produits accompagnés
          </NavLink>
          <NavLink
            to="/actualites"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-normal-blue font-bold"
                  : "hover:text-normal-blue-hover"
              } px-4 text-center`
            }
            onClick={() => setMenuOpen(false)}
          >
            Actualités
          </NavLink>
          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-normal-blue font-bold"
                  : "hover:text-normal-blue-hover"
              } px-4 text-center`
            }
            onClick={() => setMenuOpen(false)}
          >
            À propos
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-normal-blue font-bold"
                  : "hover:text-normal-blue-hover"
              } px-4 text-center`
            }
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
