import { Link } from "react-router-dom";
import ApplicationMang from "../pages/ApplicationMang";
import AssessmentMang from "../pages/AssessmentMang";
import AllocationMang from "../pages/AllocationMang";
import DigiMarking from "../pages/DigiMarking";
import DigiResult from "../pages/DigiResult";
import QuestionPaperMang from "../pages/QuestionPaperMang";
function Solutions() {
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
      <div className="flex flex-col space-y-4 p-10 text-2xl text-blue-600">
        <Link to="/paper" className="hover:underline">
          Question Paper Management
        </Link>

        <Link to="/application" className="hover:underline">
          Application Management
        </Link>
        <Link to="/assessment" className="hover:underline">
          Assessment Management
        </Link>
        <Link to="/allocation" className="hover:underline">
          Allocation Management
        </Link>
        <Link to="/digi-marking" className="hover:underline">
          Digital Marking
        </Link>
        <Link to="/digi-result" className="hover:underline">
          Digital Result
        </Link>
      </div>
      <div>
        <QuestionPaperMang />
      </div>
      <div>
        <ApplicationMang />
      </div>
      <div>
        <AssessmentMang />
      </div>
      <div>
        <AllocationMang />
      </div>
      <div>
        <DigiMarking />
      </div>
      <div>
        <DigiResult />
      </div>
    </>
  );
}
export default Solutions;
