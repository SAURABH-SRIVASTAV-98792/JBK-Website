import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const DigitalPariksha = () => {
  const segments = [
    "University Boards or the providers of Higher education",
    "School Boards",
    "Recruitment and Examination Bodies, etc.",
  ];

  const modules = [
    "Application Management",
    "Allocation Management",
    "Question Paper Management",
    "Assessment Management",
    "Result Publishing and Hosting",
    "Services",
  ];
  const benefits = [
    "Optimisation: Reduced transportation and logistics costs",
    "Reduced Time: Shortened overall exam process duration",
    "Streamline: End-to-end process efficiency and automation",
    "Unique: Dynamic question paper sequencing for each candidate",
    "Secure: Question papers uploaded only hours before exams",
    "Fast: Result processing and publishing within 2-5 days",
    "Speed: Complete exam cycle in 60-70 days vs 110-120",
    "Simple: Easy-to-use and user-friendly interface",
    "Transparent: Instant RTI support for transparency",
    "Reliable: Real-time monitoring of examinations",
    "Resource Optimization: Efficient use of resources",
    "Hassle Free: Simplified and secure fee payment",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold">Digital Pariksha</h2>
          <nav className="flex justify-center space-x-2 mt-4 text-lg text-indigo-200">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>/</span>
            <span className="text-white">Digital Pariksha</span>
          </nav>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
        <img
          src="/Images/Product/digitalpariksha.png"
          alt="Digital Pariksha"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h3 className="text-3xl mb-6 text-indigo-600 font-semibold">
            DIGITAL PARIKSHA
          </h3>
          <p className="text-gray-600 text-xl leading-relaxed ">
            Examinations are the backbone of every academic, corporate, and
            government evaluation system. With millions of exams conducted each
            year in India, institutions need a secure and efficient way to
            manage the entire process—from student applications and admit cards
            to assessments and result publishing. <br />
            <br />
            DIGITAL PARIKSHA by KriRit India is a technology-driven solution
            that simplifies the examination lifecycle. It reduces manual effort,
            speeds up processes, and delivers scalable, reliable, and
            cost-effective assessments. The result: faster cycle times,
            optimized costs, and a smarter, more transparent examination system.{" "}
          </p>
        </div>
      </section>

      {/* Segments Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-6 font-semibold text-gray-800">
            Digital Pariksha is designed to serve the following segments
          </h3>
          <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-lg">
            {segments.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 hover:text-violet-600 hover:text-xl"
              >
                <FaCheckCircle className="text-indigo-600" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl mb-6 font-semibold text-gray-800">
            Digital Pariksha comes with following modules:
          </h3>
          <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 text-lg">
            {modules.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 hover:text-violet-600 hover:text-xl"
              >
                <FaCheckCircle className="text-indigo-600" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Business Benefits:
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="bg-white shadow-lg rounded-xl text-center hover:shadow-xl  transition duration-300 ease-in-out text-lg hover:bg-gradient-to-br from-violet-400 to-violet-900 "
              >
                <p className="text-gray-600 hover:text-white hover:text-xl">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why KriRit India */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-violet-800 mb-6 text-center ">
          Why KriRit India?
        </h3>
        <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto text-xl ">
          We believe in ethical principles and delivering reliable products. Our
          solutions help reduce costs, improve visibility, and ensure
          compliance.
        </p>
        <ul className="space-y-6 text-gray-700 max-w-4xl mx-auto">
          <li className="text-lg ">
            <b className="text-indigo-600 text-xl">
              Reducing the cost of operation:
            </b>{" "}
            <span className="hover:text-violet-800 hover:text-xl">
              {" "}
              Effective monitoring of operations reduces financial losses and
              ensures resource optimization.
            </span>
          </li>
          <li className="text-lg">
            <b className="text-indigo-600 text-xl">
              Comprehensive credibility & visibility:
            </b>{" "}
            <span className="hover:text-violet-800 hover:text-xl">
              End-to-end solutions provide a complete business view and
              accelerate decision-making.
            </span>
          </li>
          <li className="text-lg">
            <b className="text-indigo-600 text-xl">Ensuring compliance:</b>{" "}
            <span className="hover:text-violet-800 hover:text-xl">
              Reliable solutions compliant with schools, universities, and
              statutory requirements (like RTI).
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default DigitalPariksha;
