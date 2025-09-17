import React from "react";
import {
  FaCheckCircle,
  FaUniversity,
  FaCreditCard,
  FaDatabase,
} from "react-icons/fa";
import {
  FaRegSmile,
  FaLock,
  FaProjectDiagram,
  FaClock,
  FaCogs,
  FaServer,
} from "react-icons/fa";

const AssessmentMang = () => {
  return (
    <>
      <div className="bg-gray-50 text-gray-800">
        {/* Header Section */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-indigo-700">
            Assessment Management
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
          <BenefitCard icon={<FaRegSmile size={40} />} title="Easy to Use">
            <p>Simple, intuitive, and user-friendly.</p>
          </BenefitCard>
          <BenefitCard icon={<FaLock size={40} />} title="Secure & Fast">
            Safe and quick performance you can trust.
          </BenefitCard>
          <BenefitCard
            icon={<FaProjectDiagram size={40} />}
            title="Streamlined Process"
          >
            Simplifies workflows for better efficiency.
          </BenefitCard>
          <BenefitCard icon={<FaClock size={40} />} title="Reduced Time & Cost">
            Save effort, money, and valuable resources.
          </BenefitCard>
          <BenefitCard
            icon={<FaCogs size={40} />}
            title="Resource Optimization"
          >
            Maximize output with minimal resources.
          </BenefitCard>
          <BenefitCard
            icon={<FaServer size={40} />}
            title="Reliable & Scalable"
          >
            Stable system that grows with your needs.
          </BenefitCard>
        </section>
      </div>
    </>
  );
};

export default AssessmentMang;
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
