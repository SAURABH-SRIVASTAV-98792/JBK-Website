import Crousel from "./Crousel";

function Home() {
  return (
    <>
      {/* 🔹 Hero Section with Crousel */}
      <section>
        <Crousel className="w-full" />
      </section>

      {/* 🔹 Why Kririt India */}
      <section className="bg-violet-500 text-white py-16 px-8 md:px-20 shadow-lg">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className=" text-4xl md:text-5xl font-bold mb-6">
              WHY KRIRIT INDIA?
            </h1>
            <p className=" text-lg md:text-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              fugit et commodi nemo. Aliquid nisi architecto, alias numquam
              tempore exercitationem?
            </p>
          </div>
          <img
            src="/Images/why-kririt-india.jpg"
            alt="Why Kririt India"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </section>

      {/* 🔹 Features Section */}
      <section className="bg-violet-300 text-white py-16 px-8 md:px-20">
        <div className="grid md:grid-cols-3 gap-8 text-center text-black">
          {[
            "Reliability",
            "Scalability",
            "Time Saving",
            "Secure & Confidential",
            "Enhanced Efficiency",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-2xl p-6 shadow-md hover:scale-105 transition hover:bg-violet-700"
            >
              <p className="text-xl font-semibold">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Products Title */}
      <section className="py-16">
        <h1 className="text-5xl font-bold text-center mb-10 text-gray-800">
          PRODUCTS WE OFFER
        </h1>
      </section>

      {/* 🔹 Products Section */}
      <section className="grid md:grid-cols-2 gap-10 px-8 md:px-20 pb-20">
        {[
          {
            title: "DIGITAL PARIKSHA",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis exercitationem voluptate cupiditate consectetur unde deserunt.",
          },
          {
            title: "DIGITAL SCORING",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt adipisci, repudiandae quae accusamus ab est nisi.",
          },
          {
            title: "ONLINE LEARNING",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugiat placeat qui dolore laudantium architecto.",
          },
          {
            title: "SMART ANALYTICS",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloremque deleniti voluptatibus praesentium minus.",
          },
        ].map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-2xl transition"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">{product.desc}</p>
            <button className="self-start bg-violet-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl text-lg font-medium transition">
              LEARN NOW
            </button>
          </div>
        ))}
      </section>
    </>
  );
}

export default Home;
