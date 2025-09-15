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
      <div className="text-center text-5xl p-20 bg-gray-800 text-white shadow-lg text-semibold ">
        <h1 className="hover:text-violet-400 text-center">SECTORS WE SERVE</h1>
        <Link
          to="/"
          className="hover:underline text-violet-400 text-2xl mt-4 inline-block text-semibold"
        >
          HOME
        </Link>
      </div>

      {/* 🔹 Circular Diagram Section */}
      <div className="hover:bg-violet-400 ">
        <img
          src="Images/sectors we serve/sectors.png"
          alt=""
          className="mx-auto "
        />
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
              className=" w-full md:w-1/2 h-auto rounded-xl shadow-lg object-cover  "
            />

            {/* Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold text-violet-800 mb-4">
                {sector.title}
              </h2>
              <p className="text-lg text-gray-600 text-xl">{sector.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sectors;
