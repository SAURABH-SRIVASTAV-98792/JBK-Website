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
            <p className="text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
              eius. <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
              quasi praesentium? Nostrum, minus? Accusamus blanditiis magnam,
              nulla numquam voluptates quod quis consequatur possimus rem ex
              asperiores. Sapiente quos ea dignissimos! Sint illum dicta eveniet
              tempore impedit nostrum, odit ullam sapiente totam autem quae
              quas. Quaerat nam deleniti enim similique neque? <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              id. Eius exercitationem maiores aliquam temporibus laboriosam
              adipisci doloremque voluptates iusto minus, debitis molestias.
              Porro dolores repellendus magni similique ipsam non? <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ex
              exercitationem neque odio. Debitis non impedit earum velit
              doloremque eius nostrum expedita, nisi magni omnis quo provident
              alias cumque voluptates quasi qui tempora ducimus sunt totam
              perferendis aperiam praesentium doloribus suscipit itaque?
              Expedita nulla quibusdam eligendi aut dolorum a natus voluptas
              modi. Aut dolorum alias a laudantium officia, repudiandae quae.
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
                <li key={item} className="flex item-center gap-3">
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
                <li key={item} className="flex item-center gap-3 ">
                  <FaCheckCircle /> {item}
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
                  className="bg-white shadow-lg rounded-xl text-center hover:shadow-xl transaction text-lg hover:bg-violet-600 "
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
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Why KriRit India?
          </h3>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto text-lg">
            We believe in ethical principles and delivering reliable products.
            Our solutions help reduce costs, improve visibility, and ensure
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
              End-to-end solutions provide a complete business view and
              accelerate decision-making.
            </li>
            <li className="text-lg">
              <b className="text-indigo-600 text-xl">Ensuring compliance:</b>{" "}
              Reliable solutions compliant with schools, universities, and
              statutory requirements (like RTI).
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default DigitalGurukul;
