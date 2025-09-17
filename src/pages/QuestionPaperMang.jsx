import React from "react";
import {
  FaCheckCircle,
  FaUniversity,
  FaCreditCard,
  FaDatabase,
} from "react-icons/fa";
import { MdSpeed, MdOutlineSecurity, MdLayersClear } from "react-icons/md";
import {
  FaBolt,
  FaBullseye,
  FaRecycle,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
const QuestionPaperMang = () => {
  return (
    <>
      <div className="bg-gray-50 text-gray-800">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-indigo-700">
            Question Paper Management
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our solution streamlines the candidate registration and enrolment
            process with online forms tailored to your requirements. Collect
            applications, consolidate data, and generate reports — all in one
            place, faster and smarter.
          </p>
        </section>

        {/* Features Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-8">
              ✨ Features & Functionality
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <FeatureItem icon={<FaCheckCircle />} title="Online Form">
                Students can easily fill and submit online applications,
                download university forms, and more.
              </FeatureItem>
              <FeatureItem icon={<FaUniversity />} title="Centre Allocation">
                Universities & Institutes can allocate exam centers easily with
                just a few clicks.
              </FeatureItem>
              <FeatureItem icon={<FaCreditCard />} title="Payment Options">
                Secure fee collection with multiple payment options and
                transaction tracking.
              </FeatureItem>
              <FeatureItem icon={<FaDatabase />} title="Data Consolidation">
                Consolidate all your data in one place with powerful reporting
                tools.
              </FeatureItem>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
          <BenefitCard icon={<FaBolt size={40} />} title="Quick Setup">
            <p>Create question papers effortlessly in minutes.</p>
          </BenefitCard>
          <BenefitCard
            icon={<FaBullseye size={40} />}
            title="Smart Distribution"
          >
            <p>Assign marks and weightage with precision.</p>
          </BenefitCard>
          <BenefitCard icon={<FaRecycle size={40} />} title="No Redundancy">
            <p>Eliminate duplicate or repetitive questions.</p>
          </BenefitCard>
          <BenefitCard icon={<FaCheckCircle size={40} />} title="Error-Free">
            <p> Minimize manual mistakes with automation.</p>
          </BenefitCard>
          <BenefitCard icon={<FaShieldAlt size={40} />} title="Secure & Fast">
            <p>Ensure safe, reliable, and speedy assessments</p>
          </BenefitCard>
          <BenefitCard icon={<FaStar size={40} />} title="Quality Boost">
            <p>Enhance overall exam standards and fairness.</p>
          </BenefitCard>
        </section>
      </div>
    </>
  );
};

export default QuestionPaperMang;
function FeatureItem({ icon, title, children }) {
  return (
    <div className="flex items-start gap-4 bg-white/10 rounded-xl p-5 hover:bg-white/20 transition">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm">{children}</p>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl transition">
      <div className="flex justify-center mb-4 text-indigo-600">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{children}</p>
    </div>
  );
}
