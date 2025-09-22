import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    //Add your real access key here
    formData.append("access_key", "6884a678-01af-4366-b96b-f1b96dae11c1");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        // FormData is required for files and normal fields
      });
      const data = await res.json();

      if (data.success) {
        setPopupMessage("✅ Message sent successfully!");
        setShowPopup(true);
        event.target.reset();
      } else {
        setPopupMessage(
          "❌ Submission failed: " + (data.message || "Unknown error")
        );
        setShowPopup(true);
      }
    } catch (err) {
      console.error("Network error:", err);
      setPopupMessage("❌ Network error. Please try again later.");
      setShowPopup(true);
    }
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[url('/Images/header.jpg')]  hover:bg-gradient-to-r from-indigo-200 to-purple-900 py-16 text-center text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold">Contact</h2>
          <nav className="flex justify-center space-x-2 mt-4 text-sm text-indigo-200">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <span>/</span>
            <span className="text-white">Contact</span>
          </nav>
        </div>
      </section>

      {/* Contact Form */}
      <div className="bg-gray-400 bg-cover bg-center py-20 px-6 flex justify-center">
        <div className="bg-[url('/Images/contact.jpg')] bg-white bg-opacity-90 p-10 rounded-2xl shadow-xl max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Have a question or want to get in touch? Fill out the form below and
            we will get back to you.
          </p>

          <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-6">
            <input type="hidden" name="from_name" value="JBK Website" />
            <input type="hidden" name="subject" value="New Contact Message" />

            {/* Name */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
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
                name="message"
                required
                placeholder="Your message"
                rows="5"
                className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-purple-500 cursor-pointer text-white font-semibold px-10 py-3 rounded-xl text-2xl hover:bg-purple-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2 text-purple-600">Email</h3>
            <p>saurabhsrivastav0999@gmail.com</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2 text-purple-600">Phone</h3>
            <p>+91 6306536110</p>
          </div>

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

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm text-center">
            <p className="text-gray-700 mb-6">{popupMessage}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
