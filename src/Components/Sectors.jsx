import { Link } from "react-router-dom";

function Sectors() {
  const sectors = [
    {
      title: "EDUCATION",
      img: "/Images/service/education.jpeg",
      desc: "Providing top-notch educational solutions to schools and colleges, ensuring interactive and modern learning experiences.",
    },
    {
      title: "GOVERNMENT",
      img: "/Images/service/government.jpg",
      desc: "Supporting government initiatives with digital solutions that streamline operations and increase efficiency.",
    },
    {
      title: "PRIVATE SECTOR",
      img: "/Images/service/private.jpg",
      desc: "Helping private companies implement digital tools for better productivity and workflow management.",
    },
    {
      title: "HEALTH CARE",
      img: "/Images/service/healthcare.jpg",
      desc: "Offering healthcare providers digital solutions for patient management and streamlined operations.",
    },
    {
      title: "COMMERCIAL",
      img: "/Images/service/commercial.jpg",
      desc: "Digital solutions for commercial enterprises to enhance customer experience and internal efficiency.",
    },
    {
      title: "COLLEGE",
      img: "/Images/service/college.jpg",
      desc: "Advanced digital tools and learning platforms to support colleges in education management.",
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold">Sector We Serve</h2>
          <nav className="flex justify-center space-x-2 mt-4 text-sm text-indigo-200">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>
        </div>
      </section>

      <div className="hover:bg-violet-400 ">
        <img src="Images/service/sectors.png" alt="" className="mx-auto " />
      </div>

      {/* 🔹 Features Section */}
      <div className="text-center py-12">
        <p className="text-blue-600 font-semibold text-lg">FEATURES</p>
        <h1 className="text-4xl font-bold">Our Features & Services</h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam eum
          atque sit non? Magni voluptatem possimus voluptatibus voluptates.
          Dignissimos, porro.
        </p>
      </div>

      {/* Sectors Details */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className={`hover:bg-gradient-to-r from-violet-500 to-pink-200 flex flex-col ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            } items-center gap-6 bg-white/50 backdrop-blur-lg rounded-4xl p-6 shadow-2xl transform transition-all duration-500 hover:scale-105 `}
          >
            {/* Image */}
            <div className=" relative w-full md:w-1/2 overflow-hidden rounded-full shadow-lg hover:rounded-3xl">
              <img
                src={sector.img}
                alt={sector.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Text */}
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-pink-500 ">
                {sector.title}
              </h2>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                {sector.desc}
              </p>
              <a
                href="#"
                className="inline-block mt-4 px-6 py-2 rounded-full bg-violet-600 text-white font-medium hover:bg-violet-700 shadow-lg transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sectors;
