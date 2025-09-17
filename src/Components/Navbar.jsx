import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const handleToggleDark = () => setDark(!dark);
  const toggleMenu = () => setMenuOpen(!menuOpen);

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
        <div className="hidden md:flex space-x-6 text-lg font-medium items-center">
          <NavLink to="/" className="hover:underline">
            HOME
          </NavLink>
          <NavLink to="/sectors" className="hover:underline">
            SECTORS WE SERVE
          </NavLink>
          <NavLink to="/Career" className="hover:underline">
            CAREER
          </NavLink>
          <NavLink to="/clients" className="hover:underline">
            CLIENTS
          </NavLink>
          {/* PRODUCT DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button className="hover:underline flex items-center">
              PRODUCT ⬇
            </button>
            {productOpen && (
              <div className="absolute top-10 left-0 bg-white text-black rounded-2xl shadow-2xl p-4 w-80 gap-3 animate-fadeIn">
                <Link
                  to="/pariksha"
                  className="flex items-start space-x-3 hover:bg-violet-50 p-3 rounded-xl"
                >
                  <span className="text-violet-500 text-xl">📂</span>
                  <div>
                    <p className="font-semibold">Digital Pariksha</p>
                    <p className="text-sm text-gray-500">
                      Manage end-to-end applications smartly
                    </p>
                  </div>
                </Link>
                <Link
                  to="/evaluation"
                  className="flex items-start space-x-3 hover:bg-violet-50 p-3 rounded-xl"
                >
                  <span className="text-violet-500 text-xl">📂</span>
                  <div>
                    <p className="font-semibold">Digital Evaluation</p>
                    <p className="text-sm text-gray-500">
                      Manage end-to-end applications smartly
                    </p>
                  </div>
                </Link>
                <Link
                  to="/scoring"
                  className="flex items-start space-x-3 hover:bg-violet-50 p-3 rounded-xl"
                >
                  <span className="text-violet-500 text-xl">📂</span>
                  <div>
                    <p className="font-semibold">Digital Scoring</p>
                    <p className="text-sm text-gray-500">
                      Manage end-to-end applications smartly
                    </p>
                  </div>
                </Link>
                <Link
                  to="/gurukul"
                  className="flex items-start space-x-3 hover:bg-violet-50 p-3 rounded-xl"
                >
                  <span className="text-violet-500 text-xl">📂</span>
                  <div>
                    <p className="font-semibold">Digital Gurukul</p>
                    <p className="text-sm text-gray-500">
                      Manage end-to-end applications smartly
                    </p>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* solution dropdown */}

          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button className="hover:underline flex items-center">
              SOLUTIONS ⬇
            </button>
            {solutionsOpen && (
              <div className="absolute top-10 left-0 bg-white text-black rounded-2xl shadow-2xl p-4 w-96 gap-3 animate-fadeIn">
                <a
                  href="#paper"
                  className="flex items-start space-x-3 hover:bg-violet-50 p-3 rounded-xl"
                >
                  <span className="text-violet-500 text-xl">📄</span>
                  <div>
                    <p className="font-semibold">Question Paper Management</p>
                    <p className="text-sm text-gray-500">
                      Smart digital examination platform
                    </p>
                  </div>
                </a>

                <a
                  href="#application"
                  className="flex items-start space-x-3 hover:bg-violet-50 p-3 rounded-xl"
                >
                  <span className="text-violet-500 text-xl">📝</span>
                  <div>
                    <p className="font-semibold">Application Management</p>
                    <p className="text-sm text-gray-500">
                      Smart digital examination platform
                    </p>
                  </div>
                </a>

                <a
                  href="#assessment"
                  className="flex items-start space-x-3 hover:bg-violet-50 p-3 rounded-xl"
                >
                  <span className="text-violet-500 text-xl">🎓</span>
                  <div>
                    <p className="font-semibold">Assessment Management</p>
                    <p className="text-sm text-gray-500">
                      Smart digital examination platform
                    </p>
                  </div>
                </a>

                <a
                  href="#allocation"
                  className="flex items-start space-x-3 hover:bg-violet-50 p-3 rounded-xl"
                >
                  <span className="text-violet-500 text-xl">🎯</span>
                  <div>
                    <p className="font-semibold">Allocation Management</p>
                    <p className="text-sm text-gray-500">
                      Smart digital examination platform
                    </p>
                  </div>
                </a>

                <a
                  href="#digi-marking"
                  className="flex items-start space-x-3 hover:bg-violet-50 p-3 rounded-xl"
                >
                  <span className="text-violet-500 text-xl">✍️</span>
                  <div>
                    <p className="font-semibold">DigiMarking</p>
                    <p className="text-sm text-gray-500">
                      Smart digital examination platform
                    </p>
                  </div>
                </a>

                <a
                  href="#digi-result"
                  className="flex items-start space-x-3 hover:bg-violet-50 p-3 rounded-xl"
                >
                  <span className="text-violet-500 text-xl">📈</span>
                  <div>
                    <p className="font-semibold">DigiResult</p>
                    <p className="text-sm text-gray-500">
                      Smart digital examination platform
                    </p>
                  </div>
                </a>
              </div>
            )}
          </div>
          <NavLink to="/contact" className="hover:underline">
            CONTACT
          </NavLink>
          <NavLink to="/signin" className="hover:underline">
            SIGN IN
          </NavLink>
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
      {/* MOBILE SIDEBAR MENU */}
      <div
        className={`fixed top-0 right-0 w-2/3 h-full shadow-lg p-6 flex flex-col space-y-6
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
        ${dark ? "bg-gray-800 text-white" : "bg-violet-500 text-white"}
        z-50`}
      >
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          HOME
        </NavLink>
        <NavLink to="/sectors" onClick={() => setMenuOpen(false)}>
          SECTOR WE SERVE
        </NavLink>
        <NavLink to="/career" onClick={() => setMenuOpen(false)}>
          CAREER
        </NavLink>
        <NavLink to="/clients" onClick={() => setMenuOpen(false)}>
          CLIENTS
        </NavLink>

        {/* ✅ Products Accordion */}
        <div>
          <button
            onClick={() => setProductOpen(!productOpen)}
            classNam
            e="w-full text-left flex justify-between items-center"
          >
            PRODUCTS {productOpen ? "▲" : "▼"}
          </button>
          {productOpen && (
            <div className="pl-4 mt-2 space-y-2">
              <NavLink to="/pariksha" onClick={() => setMenuOpen(false)}>
                📦 Digital Pariksha
              </NavLink>
              <NavLink to="/evaluation" onClick={() => setMenuOpen(false)}>
                📂 Digital Evaluation
              </NavLink>
              <NavLink to="/scoring" onClick={() => setMenuOpen(false)}>
                📝 Digital Scoring
              </NavLink>
              <NavLink to="/gurukul" onClick={() => setMenuOpen(false)}>
                📝 Digital Gurukul
              </NavLink>
            </div>
          )}
        </div>

        {/*  Solutions Accordion */}
        <div>
          <button
            onClick={() => setSolutionsOpen(!solutionsOpen)}
            className="w-full text-left flex justify-between items-center"
          >
            SOLUTIONS {solutionsOpen ? "▲" : "▼"}
          </button>

          {solutionsOpen && (
            <div className="pl-4 mt-2 space-y-2">
              <a href="#paper" onClick={() => setMenuOpen(false)}>
                📄 Question Paper Management
              </a>
              <a href="#application" onClick={() => setMenuOpen(false)}>
                📝 Application Management
              </a>
              <a href="#assessment" onClick={() => setMenuOpen(false)}>
                🎓 Assessment Management
              </a>
              <a href="#allocation" onClick={() => setMenuOpen(false)}>
                🎯 Allocation Management
              </a>
              <a href="#digi-marking" onClick={() => setMenuOpen(false)}>
                ✍️ DigiMarking
              </a>
              <a href="#digi-result" onClick={() => setMenuOpen(false)}>
                📈 DigiResult
              </a>
            </div>
          )}
        </div>

        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          CONTACT
        </NavLink>
        <NavLink to="/signin" onClick={() => setMenuOpen(false)}>
          SIGN IN
        </NavLink>
      </div>

      {/* ✅ Animation */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out forwards;
        }
      `}</style>
    </>
  );
}

export default Navbar;
