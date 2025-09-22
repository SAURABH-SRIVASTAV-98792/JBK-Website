import DigitalEvaluation from "../pages/DigitalEvaluation";
import DigitalGurukul from "../pages/DigitalGurukul";
import DigitalPariksha from "../pages/DigitalPariksha";
import DigitalScoring from "../pages/DigitalScoring";
import { Link } from "react-router-dom";
function Products() {
  return (
    <>
      {/* 🔹 Header / Hero Section */}
      {/* <section className="bg-gradient-to-r from-indigo-100 to-purple-600 py-16 text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold">Products</h2>
          <nav className="flex justify-center space-x-2 mt-4 text-sm text-indigo-200">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>/</span>
            <span className="text-white">Products</span>
          </nav>
        </div>
      </section> */}
      <div>
        <DigitalPariksha />
      </div>
      <div>
        <DigitalEvaluation />
      </div>
      <div>
        <DigitalScoring />
      </div>
      <div>
        <DigitalGurukul />
      </div>
    </>
  );
}
export default Products;
