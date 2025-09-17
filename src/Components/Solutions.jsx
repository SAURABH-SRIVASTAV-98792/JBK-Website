import { Link } from "react-router-dom";
import ApplicationMang from "../pages/ApplicationMang";
import AssessmentMang from "../pages/AssessmentMang";
import AllocationMang from "../pages/AllocationMang";
import DigiMarking from "../pages/DigiMarking";
import DigiResult from "../pages/DigiResult";
import QuestionPaperMang from "../pages/QuestionPaperMang";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Solutions() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // scroll to top if no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <div className="text-center text-5xl p-20 bg-gray-500 text-white">
        <h1 className="font-bold">SOLUTIONS</h1>
        <Link
          to="/"
          className="font-semibold inline-block mt-4 text-2xl text-violet-900 hover:underline"
        >
          HOME
        </Link>
      </div>

      {/* Sidebar Links */}
      <div
        className="flex flex-col space-y-4 p-10 text-xl font-semibold 
                bg-gradient-to-br from-blue-50 via-white to-blue-100 
                rounded-2xl shadow-lg w-full max-w-md mx-auto bg-gradient-to-br from-violet-300 via white to-violet-700 transition duration-300 ease-in-out"
      >
        <a href="#paper" className="menu-link">
          <p className="hover:bg-gradient-to-br from-blue-300 via white to-blue-700 transition duration-300 ease-in-out ">
            {" "}
            📄 Question Paper Management
          </p>
        </a>
        <a href="#application" className="menu-link">
          <p className="hover:bg-gradient-to-br from-blue-300 via white to-blue-700 transition duration-300 ease-in-out ">
            {" "}
            📝 Application Management
          </p>
        </a>
        <a href="#assessment" className="menu-link">
          <p className="hover:bg-gradient-to-br from-blue-300 via white to-blue-700 transition duration-300 ease-in-out ">
            {" "}
            📊 Assessment Management
          </p>
        </a>
        <a href="#allocation" className="menu-link">
          <p className="hover:bg-gradient-to-br from-blue-300 via white to-blue-700 transition duration-300 ease-in-out ">
            {" "}
            🎯 Allocation Management
          </p>
        </a>
        <a href="#digi-marking" className="menu-link">
          <p className="hover:bg-gradient-to-br from-blue-300 via white to-blue-700 transition duration-300 ease-in-out ">
            {" "}
            ✍️ Digital Marking
          </p>
        </a>
        <a href="#digi-result" className="menu-link">
          <p className="hover:bg-gradient-to-br from-blue-300 via white to-blue-700 transition duration-300 ease-in-out ">
            {" "}
            📈 Digital Result
          </p>
        </a>
      </div>
      {/* Content Sections */}
      <div id="paper" className="scroll-mt-28">
        <QuestionPaperMang />
      </div>
      <div id="application" className="scroll-mt-28">
        <ApplicationMang />
      </div>
      <div id="assessment" className="scroll-mt-28">
        <AssessmentMang />
      </div>
      <div id="allocation" className="scroll-mt-28">
        <AllocationMang />
      </div>
      <div id="digi-marking" className="scroll-mt-28">
        <DigiMarking />
      </div>
      <div id="digi-result" className="scroll-mt-28">
        <DigiResult />
      </div>
    </>
  );
}

export default Solutions;
