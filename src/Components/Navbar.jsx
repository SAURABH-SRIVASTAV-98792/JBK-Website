import { Link } from "react-router-dom";
import Mode from "./Mode";
function Navbar() {
  return (
    <>
      {/* page-1 */}

      <div className="border flex space-x-6 p-3 bg-amber-400">
        <a href="">saurabhsrivastav0999@gmail.com</a>
        <a href="">6306536110</a>
        <div className="ml-auto">
          <Mode />
          <p>REFER CUSTOMER & GET REWARDED </p>
        </div>
      </div>

      {/* page-2 */}

      <div
        className="border p-9 flex justify-between p-4 bg-red-400 text-2xl sm:text-sm max-sm:w-60 max-sm:pl-10 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen
      max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all"
      >
        <Link to="/">
          <img src="/Images/logo-color-1.png" alt="" />
        </Link>
        <Link to="/" className="sm:hover:border-b">
          HOME
        </Link>
        <Link to="/sectors " className="sm:hover:border-b">
          SECTOR WE SERVE
        </Link>
        <Link to="/career " className="sm:hover:border-b">
          CAREER
        </Link>
        <Link to="/clients " className="sm:hover:border-b">
          CLIENTS
        </Link>
        <Link to="/products " className="sm:hover:border-b">
          PRODUCTS
        </Link>
        <Link to="/solutions " className="sm:hover:border-b">
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
