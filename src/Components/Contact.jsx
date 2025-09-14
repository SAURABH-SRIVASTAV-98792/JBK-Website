import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      {/* 🔹 Header / Hero Section */}
      <div className="text-center text-5xl p-20 bg-purple-600 text-white">
        <h1>CONTACT</h1>
        <Link
          to="/"
          className="inline-block mt-4 text-2xl text-blue-200 hover:underline"
        >
          HOME
        </Link>
      </div>

      {/* 🔹 Contact Form Section */}
      <div className="bg-gray-400 bg-cover bg-center py-20 px-6 flex justify-center">
        <div className="bg-[url('/Images/contact.jpg')] bg-white bg-opacity-90 p-10 rounded-2xl shadow-xl max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Have a question or want to get in touch? Fill out the form below and
            we will get back to you.
          </p>

          <form className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2 flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                placeholder="Your message"
                rows="5"
                className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-purple-600 text-white font-semibold px-10 py-3 rounded-xl text-2xl hover:bg-purple-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* 🔹 Contact Info Section */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Email */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2 text-purple-600">Email</h3>
            <p>saurabhsrivastav0999@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2 text-purple-600">Phone</h3>
            <p>+91 6306536110</p>
          </div>

          {/* Address */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2 text-purple-600">
              Our Office
            </h3>
            <p>
              B1/E14, Second Floor, NH-19, near LIC Building, Block E Mohan
              Co-operative Industrial Estate, New Delhi 110044
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
