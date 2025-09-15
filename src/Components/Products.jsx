import DigitalEvaluation from "../pages/DigitalEvaluation";
import DigitalGurukul from "../pages/DigitalGurukul";
import DigitalPariksha from "../pages/DigitalPariksha";
import DigitalScoring from "../pages/DigitalScoring";
import { Link } from "react-router-dom";
function Products() {
  return (
    <>
      {/* 🔹 Header / Hero Section */}
      <div className="text-center text-5xl p-20 bg-gray-600 text-white shadow-lg">
        <h1 className="font-bold">PRODUCTS</h1>
        <Link
          to="/"
          className="font-semibold inline-block mt-4 text-2xl text-violet-600 hover:underline"
        >
          HOME
        </Link>
      </div>
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
