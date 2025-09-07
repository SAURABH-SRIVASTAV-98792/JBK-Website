function contact() {
  return (
    <>
      <div className="border text-center text-5xl p-20 bg-purple-600 text-white">
        <h1>CONTACT</h1>
      </div>
      <div className="text-center p-20">
        <h1 className="text-3xl ">Contact Us</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, vitae.
        </p>

        <div className="flex flex-row gap-x-10 text-2xl m-20 ">
          <div className="flex flex-col gap-y-2">
            <p className="mr-auto">Email</p>
            <input
              type="email"
              placeholder="Enter email"
              className="border
        w-80 border-r-2 rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="mr-auto">Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="border
        w-80 rounded-2xl"
            />
          </div>
        </div>
        <div className="m-5 p-5 bg-cyan-500 border rounded-4xl">
          <button className="text-4xl text-white ">Submit</button>
        </div>
      </div>
      <div className="border bg-amber-700 h-35">
        <div className=" flex justify-between h-20 bg-amber-50 m-4">
          <div className="grid grid-col gap-y-1">
            <p className="text-center text-2xl">CONTACT INFO</p>
            <p className="h-15">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
          <div className="grid grid-col gap-y-2">
            <p className="text-2xl">PHONE</p>
            <p className="h-15">6306536110</p>
          </div>
          <div className="grid grid-col gap-y-2">
            <p className="text-2xl">OUR OFFICE LOCATION</p>
            <p className="h-15 s">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default contact;
