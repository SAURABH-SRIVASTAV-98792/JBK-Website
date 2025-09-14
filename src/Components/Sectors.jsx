import { Link } from "react-router-dom";

function Sectors() {
  const sectors = [
    {
      title: "EDUCATION",
      img: "/Images/education.jpg",
      desc: "Providing top-notch educational solutions to schools and colleges, ensuring interactive and modern learning experiences.",
    },
    {
      title: "GOVERNMENT",
      img: "/Images/government.jpg",
      desc: "Supporting government initiatives with digital solutions that streamline operations and increase efficiency.",
    },
    {
      title: "PRIVATE SECTOR",
      img: "/Images/private.jpg",
      desc: "Helping private companies implement digital tools for better productivity and workflow management.",
    },
    {
      title: "HEALTH CARE",
      img: "/Images/healthcare.png",
      desc: "Offering healthcare providers digital solutions for patient management and streamlined operations.",
    },
    {
      title: "COMMERCIAL",
      img: "/Images/commercial.jpg",
      desc: "Digital solutions for commercial enterprises to enhance customer experience and internal efficiency.",
    },
    {
      title: "COLLEGE",
      img: "/Images/education.png",
      desc: "Advanced digital tools and learning platforms to support colleges in education management.",
    },
  ];

  return (
    <>
      {/* Header */}
      <div className="text-center text-5xl p-20 bg-gray-800 text-white">
        <h1>SECTORS WE SERVE</h1>
        <Link
          to="/"
          className="hover:underline text-blue-400 text-2xl mt-4 inline-block"
        >
          HOME
        </Link>
      </div>

      {/* 🔹 Circular Diagram Section */}
      <div className="py-40 bg-violet-400">
        <div className="relative w-[600px] h-[600px] mx-auto rounded-full">
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Lines connecting circles */}
            <line
              x1="300"
              y1="300"
              x2="300"
              y2="60"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="300"
              y1="300"
              x2="520"
              y2="150"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="300"
              y1="300"
              x2="520"
              y2="450"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="300"
              y1="300"
              x2="300"
              y2="540"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="300"
              y1="300"
              x2="80"
              y2="450"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="300"
              y1="300"
              x2="80"
              y2="150"
              stroke="black"
              strokeWidth="2"
            />
          </svg>

          {/* Center Circle */}
          <div
            className="absolute w-80 h-80 bg-red-500 rounded-full flex items-center justify-center text-white text-center text-xl font-bold"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            SECTORS WE SERVE
          </div>

          {/* Surrounding Circles */}
          <div
            className="absolute w-48 h-48 bg-blue-500 rounded-full flex items-center justify-center text-center text-white font-semibold"
            style={{
              top: "0%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            EDUCATION
          </div>
          <div
            className="absolute w-48 h-48 bg-blue-500 rounded-full flex items-center justify-center text-center text-white font-semibold"
            style={{
              top: "25%",
              left: "100%",
              transform: "translate(-50%, -50%)",
            }}
          >
            GOVERNMENT
          </div>
          <div
            className="absolute w-48 h-48 bg-blue-500 rounded-full flex items-center justify-center text-center text-white font-semibold"
            style={{
              top: "75%",
              left: "100%",
              transform: "translate(-50%, -50%)",
            }}
          >
            PRIVATE SECTOR
          </div>
          <div
            className="absolute w-48 h-48 bg-blue-500 rounded-full flex items-center justify-center text-center text-white font-semibold"
            style={{
              top: "100%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            HEALTH CARE
          </div>
          <div
            className="absolute w-48 h-48 bg-blue-500 rounded-full flex items-center justify-center text-center text-white font-semibold"
            style={{
              top: "75%",
              left: "0%",
              transform: "translate(-50%, -50%)",
            }}
          >
            COMMERCIAL
          </div>
          <div
            className="absolute w-48 h-48 bg-blue-500 rounded-full flex items-center justify-center text-center text-white font-semibold"
            style={{
              top: "25%",
              left: "0%",
              transform: "translate(-50%, -50%)",
            }}
          >
            COLLEGE
          </div>
        </div>
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
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <img
              src={sector.img}
              alt={sector.title}
              className="w-full md:w-1/2 h-auto rounded-xl shadow-lg object-cover"
            />

            {/* Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {sector.title}
              </h2>
              <p className="text-lg text-gray-600">{sector.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sectors;
