import { Link } from "react-router-dom";

function Clients() {
  const clients = [
    { name: "Client1", logo: "/Images/clients/client.jpg" },
    { name: "Client2", logo: "/Images/clients/client.jpg" },
    { name: "Client3", logo: "/Images/clients/client.jpg" },
    { name: "Client4", logo: "/Images/clients/client.jpg" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="text-center bg-purple-400 py-20 px-6">
        <h1 className="text-5xl font-bold text-white">Our Clients</h1>
        <Link
          to="/"
          className="inline-block mt-4 text-2xl text-white hover:underline font-semibold"
        >
          HOME
        </Link>
      </div>

      {/* Clients Logo Grid */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-items-center">
        {clients.map((client, index) => (
          <div
            key={index}
            className="transition transform hover:scale-105 bg-white p-6 rounded-lg shadow-lg"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-20 grayscale hover:grayscale-0 mx-auto"
            />
            <p className="text-center mt-2 font-medium">{client.name}</p>
          </div>
        ))}

        {/* testimonials */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-10">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 mb-4">"Great service and support!"</p>
              <h3 className="font-bold text-gray-900">John Doe</h3>
              <p className="text-gray-500">CEO, Company A</p>
            </div>
            {/* Add more testimonials */}
          </div>
        </div>

        {/* case studies */}

        <div className="bg-gray-100 py-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Lorem ipsum dolor sit.</h2>

          <Link
            to="/contact"
            className="bg-blue-400 inline-block mt-4 text-2xl text-white hover:underline font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}

export default Clients;
