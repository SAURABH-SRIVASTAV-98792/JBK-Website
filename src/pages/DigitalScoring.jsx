import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const DigitalScoring = () => {
  const segement = ["Universities", "Boards", "Schools", "Recruitment Boards"];
  const benefit = [
    "Time and Cost Optimization",
    "Resource Optimization",
    "Easy to use and Affordable",
    "Centralized Data",
    "Reliable and Scalable",
    "Hassle-free Fee Payment",
  ];
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold">Digital Scoring</h2>
          <nav className="flex justify-center space-x-2 mt-4 text-sm text-indigo-200">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>/</span>
            <span className="text-white">Digital Scoring</span>
          </nav>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/Images/Product/digitalscoring.png"
          alt="Digital Scoring"
          className="rounded-xl shadow-lg"
        />
        <div>
          <h3 className="text-3xl font-semibold text-indigo-700 mb-4">
            What is Digital Scoring?
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            At KriRit India, we focus on innovative, effective products like
            Digital Scoring that help clients stay competitive in the global
            marketplace. It’s cost-effective, scalable, and designed to deliver
            high-quality services. <br />
            <br />
            With the latest technology and professional expertise, we ensure
            efficient OMR management, scanning, and answer script evaluation.
            Our solution is built to improve efficiency and accuracy.
          </p>
        </div>
      </section>

      {/* Segments Section */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Perfectly suited for:
          </h3>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            {segement.map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg">
                <FaCheckCircle className="text-indigo-600" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Business Benefits
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefit.map((benefit) => (
              <div
                key={benefit}
                className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
              >
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why KriRit India */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Why KriRit India?
        </h3>
        <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto text-lg">
          We believe in ethical principles and delivering reliable products. Our
          solutions help reduce costs, improve visibility, and ensure
          compliance.
        </p>
        <ul className="space-y-6 text-gray-700 max-w-4xl mx-auto">
          <li className="text-lg">
            <b className="text-indigo-600 text-xl">
              Reducing the cost of operation:
            </b>{" "}
            Effective monitoring of operations reduces financial losses and
            ensures resource optimization.
          </li>
          <li className="text-lg">
            <b className="text-indigo-600 text-xl">
              Comprehensive credibility & visibility:
            </b>{" "}
            End-to-end solutions provide a complete business view and accelerate
            decision-making.
          </li>
          <li className="text-lg">
            <b className="text-indigo-600 text-xl">Ensuring compliance:</b>{" "}
            Reliable solutions compliant with schools, universities, and
            statutory requirements (like RTI).
          </li>
        </ul>
      </section>
    </div>
  );
};

export default DigitalScoring;
