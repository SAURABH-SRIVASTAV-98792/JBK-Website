import { Link } from "react-router-dom";

function Navbar({ dark, setDark }) {
  const handleClick = () => setDark(!dark);

  return (
    <>
      {/* Top bar */}
      <div className={`w-full ${dark ? "bg-gray-800" : "bg-blue-800"} border p-3 flex space-x-6 text-2xl`}>
        <a href="mailto">
          saurabhsrivastav0999@gmail.com
        </a>
        <a href="tel">6306536110</a>

        <div className="ml-auto flex items-center space-x-4">
          <button
            onClick={handleClick}
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
          >
            Toggle
          </button>
          <p>{dark ? "🌜" : "🌞"}</p>
          <p className="hidden sm:block">REFER CUSTOMER & GET REWARDED</p>
        </div>
      </div>

      {/* Navigation */}
      <div
        className={`border p-4 flex justify-between text-2xl sm:text-sm
        max-sm:w-60 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen
        max-sm:h-full max-sm:flex-col max-sm:text-white 
        max-sm:pt-20 sm:items-center gap-5 transition-all
        ${dark ? "bg-gray-900 text-white" : "bg-red-400 text-black"}`}
      >
        <Link to="/">
          <img src="/Images/logo-color-1.png" alt="Logo" />
        </Link>
        <Link to="/" className="sm:hover:border-b">
          HOME
        </Link>
        <Link to="/sectors" className="sm:hover:border-b">
          SECTOR WE SERVE
        </Link>
        <Link to="/career" className="sm:hover:border-b">
          CAREER
        </Link>
        <Link to="/clients" className="sm:hover:border-b">
          CLIENTS
        </Link>
        <Link to="/products" className="sm:hover:border-b">
          PRODUCTS
        </Link>
        <Link to="/solutions" className="sm:hover:border-b">
          SOLUTIONS
        </Link>
        <Link to="/contact" className="sm:hover:border-b">
          CONTACT
        </Link>
        <Link to="/signin" className="sm:hover:border-b">
          SIGN IN
        </Link>
      </div>
    </>
  );
}

export default Navbar;
