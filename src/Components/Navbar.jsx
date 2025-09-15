import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleDark = () => setDark(!dark);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SECTOR WE SERVE", path: "/sectors" },
    { name: "CAREER", path: "/career" },
    { name: "CLIENTS", path: "/clients" },
    { name: "PRODUCTS", path: "/products" },
    { name: "SOLUTIONS", path: "/solutions" },
    { name: "CONTACT", path: "/contact" },
    { name: "SIGN IN", path: "/signin" },
  ];

  return (
    <>
      {/* 🔹 Top Info Bar */}
      <div
        className={`w-full ${
          dark ? "bg-violet-700" : "bg-violet-600 shadow-lg"
        } text-white px-6 py-2 flex items-center justify-between text-sm`}
      >
        <div className="flex space-x-6">
          <a
            href="mailto:saurabhsrivastav0999@gmail.com"
            className="hover:underline"
          >
            saurabhsrivastav0999@gmail.com
          </a>
          <a href="tel:6306536110" className="hover:underline">
            6306536110
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handleToggleDark}
            className="p-2 rounded-full bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
            aria-label="Toggle Dark Mode"
          >
            {dark ? "🌜" : "🌞"}
          </button>
          <p className="hidden md:block font-medium">
            REFER CUSTOMER & GET REWARDED
          </p>
        </div>
      </div>

      {/* 🔹 Main Navigation Bar */}
      <nav
        className={`${
          dark
            ? "bg-violet-500 text-white shadow-lg"
            : "bg-violet-400 text-white shadow-lg"
        } px-6 py-3 flex items-center justify-between relative z-50`}
      >
        {/* Logo */}
        <Link to="/">
          <img src="/Images/logo-color-1.png" alt="Logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:border-b-2 border-white transition ${
                  isActive ? "font-bold border-b-2" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="md:hidden p-2 z-[9999] bg-transparent text-white"
        >
          {menuOpen ? <IoMdClose size={32} /> : <CiMenuFries size={32} />}
        </button>
      </nav>

      {/* 🔹 Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}

      {/* 🔹 Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full shadow-lg p-6 flex flex-col space-y-6
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
        ${dark ? "bg-gray-800 text-white" : "bg-red-500 text-white"}
        z-50`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className="hover:underline text-lg"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Navbar;
