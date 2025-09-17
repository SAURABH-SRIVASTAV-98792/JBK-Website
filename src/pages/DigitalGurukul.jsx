import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const DigitalGurukul = () => {
  const segement = [
    "Universities boards: Builds smarter campuses with simplified learning, teaching support, and education excellence.",
    "Schools and Colleges: Creates digital campuses to streamline academic and administrative processes.",
    "Empowers trainers and educators to deliver measurable learning goals effectively.",
    "Vocational training: Delivers skill development and distance learning solutions with modern technologies.",
  ];
  const benefit = [
    "Reduce operational costs",
    "Enhance credibility and visibility",
    "Ensure compliance",
  ];

  return (
    <>
      <div className="bg-gray-50 text-gray-800">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-center text-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold">Digital Grukul</h2>
            <nav className="flex justify-center space-x-2 mt-4 text-lg text-indigo-200">
              <a href="/" className="hover:text-white">
                Home
              </a>
              <span>/</span>
              <span className="text-white">Digital Grukul</span>
            </nav>
          </div>
        </section>

        {/* intro section */}
        <section className="max-w-7xl mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-6">
          <img
            src="/Images/Product/digitalscoring.png"
            alt="Digital Pariksha"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h3 className="text-3xl mb-6 text-indigo-600 font-semibold">
              DIGITAL GURUKUL
            </h3>
            <p className="text-gray-600 text-xl leading-relaxed">
              DIGITAL GURUKUL by KriRit is a paperless administration platform
              for educational institutions, streamlining both academic and
              administrative processes. It reduces time, cost, and effort while
              improving communication across students, parents, teachers, staff,
              and management.
            </p>
          </div>
        </section>

        {/* segement section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl mb-6 font-semibold text-gray-800">
              Digital Gurukul is designed to serve the following segments:
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-600 text-lg">
              {segement.map((item) => (
                <li
                  key={item}
                  className="flex item-center gap-3 hover:text-violet-600 hover:text-xl"
                >
                  <FaCheckCircle className="text-indigo-600 " />
                  <span> {item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* module section */}

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl mb-6 font-semibold text-gray-800">
              Digital Gurukul comes with following modules:
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-600 text-lg">
              {[
                "Student Life Cycle Management",
                "Human Resource Life cycle management",
                "Institute Administration",
                "Exam Management",
              ].map((item) => (
                <li
                  key={item}
                  className="flex item-center gap-3 hover:text-violet-600 hover:text-xl"
                >
                  <FaCheckCircle className="text-indigo-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* benefit section */}

        <section className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl font-bold mb-10 text-gray-800 text-center">
              Business Benefits:
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {benefit.map((benefit) => (
                <div
                  key={benefit}
                  className="bg-white shadow-lg rounded-xl text-center hover:shadow-xl  transition duration-300 ease-in-out text-lg hover:bg-gradient-to-br from-violet-400 to-violet-900"
                >
                  <p className="text-gray-600 hover:text-white hover:text-xl p-4">
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
            We believe in ethical principles and delivering reliable products.
            Our solutions help reduce costs, improve visibility, and ensure
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
    </>
  );
};

export default DigitalGurukul;
