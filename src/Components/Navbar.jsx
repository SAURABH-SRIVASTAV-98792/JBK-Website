import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const productRef = useRef(null);
  const solutionsRef = useRef(null);

  // ✅ Detect screen size
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Close dropdown when clicking outside (only desktop)
  useEffect(() => {
    if (!isDesktop) return;
    function handleClickOutside(event) {
      if (productRef.current && !productRef.current.contains(event.target)) {
        setProductOpen(false);
      }
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target)
      ) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDesktop]);
  const handleToggleDark = () => setDark(!dark);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* 🔹 Top Info Bar (Fixed & Visible Text) */}
      <div
        className={` top-0 left-0 w-full z-50 transition-all duration-300
    ${
      dark
        ? "bg-violet-900/95 backdrop-blur-md shadow-md"
        : "bg-gradient-to-r from-violet-600/90 via-purple-600/90 to-pink-600/90 shadow-md"
    } text-white px-4 sm:px-6 py-2 flex items-center justify-between text-sm`}
      >
        {/* Left Section: Contact Info */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <a
            href="mailto:saurabhsrivastav0999@gmail.com"
            className="flex items-center gap-1 sm:gap-2 hover:text-yellow-300 transition cursor-pointer drop-shadow-md"
          >
            📧 saurabhsrivastav0999@gmail.com
          </a>
          <a
            href="tel:6306536110"
            className="flex items-center gap-1 sm:gap-2 hover:text-yellow-300 transition cursor-pointer drop-shadow-md"
          >
            📞 6306536110
          </a>
        </div>

        {/* Right Section: Theme Toggle + Promo */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={handleToggleDark}
            className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition cursor-pointer drop-shadow-md"
          >
            {dark ? "🌜" : "🌞"}
          </button>
          <p className="hidden md:block font-medium tracking-wide text-xs sm:text-sm drop-shadow-md">
            🎁 REFER & GET REWARDED
          </p>
        </div>
      </div>

      {/* 🔹 Main Navigation Bar */}
      <nav
        className={`flex justify-between pr-5  top-11 w-full z-50 backdrop-blur-md border-b border-white/20 transition-all duration-500 ${
          dark
            ? "bg-gray-900/60 text-white"
            : "bg-gradient-to-r from-violet-500/70 via-purple-500/70 to-pink-500/70 text-white"
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src="/Images/logo.jpg"
            alt="Logo"
            className="h-15 w-20 rounded-full "
          />
        </Link>

        {/* ✅ Desktop Menu */}
        {isDesktop && (
          <div className="hidden md:flex space-x-6 text-lg font-medium items-center">
            <NavLink to="/" className="relative group">
              <span className="px-3 py-2 transition-all duration-300 group-hover:text-violet-700">
                HOME
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-violet-700 transition-all duration-1200 group-hover:w-full"></span>
            </NavLink>

            <NavLink to="/service" className="relative group">
              <span className="px-3 py-2 transition-all duration-300 group-hover:text-violet-700">
                SERVICES
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-violet-700 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink to="/career" className="relative group">
              <span className="px-3 py-2 transition-all duration-300 group-hover:text-violet-700">
                CAREER
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-violet-700 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink to="/clients" className="relative group">
              <span className="px-3 py-2 transition-all duration-300 group-hover:text-violet-700">
                CLIENT
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-violet-700 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>

            {/* Product Dropdown */}
            <div
              ref={productRef}
              className="relative"
              // onMouseEnter={() => setProductOpen(true)}
              // onMouseLeave={() => setProductOpen(false)}
            >
              <button
                className="relative flex items-center group"
                onClick={() => setProductOpen((prev) => !prev)}
              >
                <span className="hover:text-violet-700"> PRODUCT ⬇</span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-violet-700 transition-all duration-300 group-hover:w-full"></span>
              </button>
              {productOpen && (
                <div className="absolute top-10 left-0 bg-white text-black rounded-2xl shadow-2xl p-4 w-80 animate-fadeIn">
                  <Link
                    to="/pariksha"
                    className="block hover:bg-violet-50 p-3 rounded-xl"
                  >
                    📂 Digital Pariksha
                  </Link>
                  <Link
                    to="/evaluation"
                    className="block hover:bg-violet-50 p-3 rounded-xl"
                  >
                    📝 Digital Evaluation
                  </Link>
                  <Link
                    to="/scoring"
                    className="block hover:bg-violet-50 p-3 rounded-xl"
                  >
                    📊 Digital Scoring
                  </Link>
                  <Link
                    to="/gurukul"
                    className="block hover:bg-violet-50 p-3 rounded-xl"
                  >
                    🎓 Digital Gurukul
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div ref={solutionsRef} className="relative">
              <button
                className="relative flex items-center group"
                onClick={() => setSolutionsOpen((prev) => !prev)}
              >
                <span className="hover:text-violet-700"> SOLUTIONS ⬇</span>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-violet-700 transition-all duration-300 group-hover:w-full"></span>
              </button>

              {solutionsOpen && (
                <div className="absolute top-10 left-0 bg-white text-black rounded-2xl shadow-2xl p-4 w-80 animate-fadeIn">
                  <Link
                    to="/solutions#paper"
                    className="block hover:bg-violet-50 p-3 rounded-xl"
                  >
                    📄 Question Paper Management
                  </Link>
                  <Link
                    to="/solutions#app"
                    className="block hover:bg-violet-50 p-3 rounded-xl"
                  >
                    📝 Application Management
                  </Link>
                  <Link
                    to="/solutions#assessment"
                    className="block hover:bg-violet-50 p-3 rounded-xl"
                  >
                    🎓 Assessment Management
                  </Link>
                  <Link
                    to="/solutions#allocation"
                    className="block hover:bg-violet-50 p-3 rounded-xl"
                  >
                    🎯 Allocation Management
                  </Link>
                  <Link
                    to="/solutions#marking"
                    className="block hover:bg-violet-50 p-3 rounded-xl"
                  >
                    ✍️ DigiMarking
                  </Link>
                  <Link
                    to="/solutions#result"
                    className="block hover:bg-violet-50 p-3 rounded-xl"
                  >
                    📈 DigiResult
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/contact" className="relative group">
              <span className="px-3 py-2 transition-all duration-300 group-hover:text-violet-700">
                CONTACT
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-violet-700 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
            <NavLink to="/signin" className="relative group">
              <span className="px-3 py-2 transition-all duration-300 group-hover:text-violet-700">
                SIGN IN
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-violet-700 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </div>
        )}

        {/* ✅ Mobile Menu Button */}
        {!isDesktop && (
          <button
            onClick={toggleMenu}
            className=" fixed top-3 right-4 p-2 z-[10001] bg-transparent text-white"
          >
            {menuOpen ? (
              <IoMdClose size={32} className="text-white" />
            ) : (
              <CiMenuFries
                size={32}
                className="text-violet-900 rounded-4xl bg-white"
              />
            )}
          </button>
        )}
      </nav>

      {/* Mobile Sidebar */}
      {menuOpen && (
        <div
          className={`fixed top-0 right-0 h-full w-72 sm:w-80 md:w-96 z-50 
      bg-gradient-to-b from-violet-600/80 via-purple-700/80 to-pink-600/80 
      backdrop-blur-xl shadow-2xl p-6 flex flex-col space-y-6 
      text-white transform transition-transform duration-500 ease-in-out
      ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
          >
            <IoMdClose size={28} className="cursor-pointer" />
          </button>

          {/* Logo (optional) */}
          <div className="flex items-center space-x-3">
            <img
              src="/Images/logo.jpg"
              alt="Logo"
              className="h-10 rounded-full"
            />
            {/* <h2 className="text-xl font-bold tracking-wide">My Brand</h2> */}
          </div>

          {/* Links */}
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-white/20 transition"
          >
            HOME
          </NavLink>
          <NavLink
            to="/service"
            onClick={() => setMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-white/20 transition"
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/career"
            onClick={() => setMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-white/20 transition"
          >
            CAREER
          </NavLink>
          <NavLink
            to="/clients"
            onClick={() => setMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-white/20 transition"
          >
            CLIENTS
          </NavLink>

          {/* Products Accordion */}
          <div className="bg-white/10 rounded-xl p-3">
            <button
              onClick={() => setProductOpen(!productOpen)}
              className="w-full flex justify-between items-center font-medium"
            >
              PRODUCTS {productOpen ? "▲" : "▼"}
            </button>
            {productOpen && (
              <div className="pl-3 mt-2 space-y-2 text-sm">
                <NavLink
                  to="/pariksha"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-2 rounded-lg hover:bg-white/20 transition"
                >
                  📂 Digital Pariksha
                </NavLink>
                <NavLink
                  to="/evaluation"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-2 rounded-lg hover:bg-white/20 transition"
                >
                  📝 Digital Evaluation
                </NavLink>
                <NavLink
                  to="/scoring"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-2 rounded-lg hover:bg-white/20 transition"
                >
                  📊 Digital Scoring
                </NavLink>
                <NavLink
                  to="/gurukul"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-2 rounded-lg hover:bg-white/20 transition"
                >
                  🎓 Digital Gurukul
                </NavLink>
              </div>
            )}
          </div>

          {/* Solutions Accordion */}
          <div className="bg-white/10 rounded-xl p-3">
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="w-full flex justify-between items-center font-medium"
            >
              SOLUTIONS {solutionsOpen ? "▲" : "▼"}
            </button>
            {solutionsOpen && (
              <div className="pl-3 mt-2 space-y-2 text-sm">
                <NavLink
                  to="/solutions#paper"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-2 rounded-lg hover:bg-white/20 transition"
                >
                  📄 Question Paper Management
                </NavLink>
                <NavLink
                  to="/solutions#app"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-2 rounded-lg hover:bg-white/20 transition"
                >
                  📝 Application Management
                </NavLink>
                <NavLink
                  to="/solutions#assessment"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-2 rounded-lg hover:bg-white/20 transition"
                >
                  🎓 Assessment Management
                </NavLink>
                <NavLink
                  to="/solutions#allocation"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-2 rounded-lg hover:bg-white/20 transition"
                >
                  🎯 Allocation Management
                </NavLink>
                <NavLink
                  to="/solutions#marking"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-2 rounded-lg hover:bg-white/20 transition"
                >
                  ✍️ DigiMarking
                </NavLink>
                <NavLink
                  to="/solutions#result"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-2 rounded-lg hover:bg-white/20 transition"
                >
                  📈 DigiResult
                </NavLink>
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-white/20 transition"
          >
            CONTACT
          </NavLink>
          <NavLink
            to="/signin"
            onClick={() => setMenuOpen(false)}
            className="block py-2 px-3 rounded-lg hover:bg-white/20 transition"
          >
            SIGN IN
          </NavLink>
        </div>
      )}

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
