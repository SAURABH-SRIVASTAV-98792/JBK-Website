import { Link, NavLink } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
function Footer() {
  return (
    <footer className="bg-blue-950 text-white relative z-50">
      {/* 🔹 Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 px-6 py-16">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            KriRit India
          </h2>
          <p className="text-lg text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
            laboriosam.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Quick Links
          </h2>
          <ul className="space-y-3 text-lg">
            <li>
              <Link to="/about" className="hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/choose" className="hover:text-blue-500">
                Why Choose Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/career" className="hover:text-blue-500">
                Career
              </Link>
            </li>
            <li>
              <Link to="/clients" className="hover:text-blue-500">
                Clients
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Products
          </h2>
          <ul className="space-y-3 text-lg flex flex-col">
            <Link to="/pariksha">📂 Digital Pariksha</Link>
            <Link to="/evaluation">📝 Digital Evaluation</Link>
            <Link to="/scoring">📊 Digital Scoring</Link>
            <Link to="/gurukul">🎓 Digital Gurukul</Link>
          </ul>
        </div>

        {/* Get in touch */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Get in Touch
          </h2>
          <ul className="space-y-3 text-lg">
            <li>
              <a
                href="mailto:saurabhsrivastav0999@gmail.com"
                className="hover:text-blue-500"
              >
                📧 saurabhsrivastav0999@gmail.com
              </a>
            </li>
            <li>
              <a
                href="mailto:agamsrivastav@gmail.com"
                className="hover:text-blue-500"
              >
                📧 agamsrivastav@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:6306536110" className="hover:text-blue-500">
                📞 6306536110
              </a>
            </li>
            <li>
              <address className="not-italic text-gray-300">
                B1/E14, Second Floor, NH-19, near LIC Building, Block E Mohan
                Co-operative Industrial Estate, New Delhi 110044.
              </address>
            </li>
          </ul>
          <div className="flex gap-4">
            <a href="http://instagram.com/">
              <IoLogoInstagram className="hover:bg-purple-800 border-1 w-7 h-7 rounded-xl" />
            </a>

            <a href="https://x.com/">
              <FaXTwitter className="hover:bg-black border w-7 h-7 rounded-xl w-5 h-5" />
            </a>

            <a href="https://www.youtube.com/">
              <CiYoutube className="hover:bg-red-600 border w-7 h-7 rounded-xl" />
            </a>

            <a href="https://www.facebook.com/">
              <FiFacebook className="border hover:bg-blue-700 w-7 h-7 rounded-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="border-t border-gray-700 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400">
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link to="/service" className="hover:text-blue-500">
              Sectors
            </Link>
            <Link to="/career" className="hover:text-blue-500">
              Career
            </Link>
            <Link to="/clients" className="hover:text-blue-500">
              Clients
            </Link>
            <Link to="/products" className="hover:text-blue-500">
              Products
            </Link>
            <Link to="/solutions" className="hover:text-blue-500">
              Solutions
            </Link>
            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </div>

          {/* Right - Policies */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-400">
            <Link className="hover:text-blue-500 cursor-pointer">
              Terms & Conditions
            </Link>
            <Link className="hover:text-blue-500 cursor-pointer">
              Privacy Policy
            </Link>
            <Link className="hover:text-blue-500 cursor-pointer">
              Refund & Cancellation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
