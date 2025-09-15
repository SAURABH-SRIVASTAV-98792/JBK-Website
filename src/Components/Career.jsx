import { Link } from "react-router-dom";

function Career() {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "New Delhi, India",
      desc: "Looking for a skilled React developer to create responsive and modern web applications.",
    },
    {
      title: "Backend Developer",
      location: "New Delhi, India",
      desc: "We need a Node.js developer experienced in building REST APIs and managing databases.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      desc: "Design beautiful and user-friendly interfaces for web and mobile applications.",
    },
    {
      title: "Digital Marketing Executive",
      location: "New Delhi, India",
      desc: "Manage social media, SEO, and online marketing campaigns for our products.",
    },
  ];

  return (
    <>
      {/* 🔹 Hero Section */}
      <div className="text-center text-5xl p-20 bg-gray-600 text-white shadow-lg">
        <h1>CAREER</h1>
        <Link
          to="/"
          className="inline-block mt-4 text-2xl text-violet-500 hover:underline"
        >
          HOME
        </Link>
      </div>

      {/* 🔹 Why Work With Us Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Why Work With Us?</h2>
        <p className="text-gray-600 text-lg">
          At KriRit India, we foster creativity, innovation, and collaboration.
          Join our team to grow your career, work on exciting projects, and be
          part of a supportive community.
        </p>
      </div>

      {/* 🔹 Job Listings */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition flex flex-col md:flex-row items-center gap-6"
          >
            {/* Job Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-2">{job.location}</p>
              <p className="text-gray-700">{job.desc}</p>
            </div>

            {/* Apply Button */}
            <div>
              <button className="bg-violet-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Call to Action Section */}
      <div className="bg-green-100 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Join Our Team?</h2>
        <p className="text-gray-700 mb-6">
          Send your resume to{" "}
          <a
            href="mailto:careers@kriritindia.com"
            className="text-green-600 underline"
          >
            careers@kriritindia.com
          </a>
        </p>
        <Link
          to="/contact"
          className="bg-violet-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition"
        >
          Contact Us
        </Link>
      </div>
    </>
  );
}

export default Career;
