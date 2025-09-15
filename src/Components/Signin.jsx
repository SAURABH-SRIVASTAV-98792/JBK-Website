function Signin() {
  return (
    <>
      <div className="bg-[url('/Images/login/loginbg.png')] bg-cover bg-center h-screen w-full flex justify-center items-center shadow-lg">
        <div className=" mx-auto shadow-lg  rounded-4xl w-200 h-150 m-10 flex flex-col justify-between items-center p-10">
          <h1 className="hover:text-violet-600 text-6xl font-bold mt-4 text-white">
            Login Form
          </h1>

          <form action="" className="text-white flex flex-col gap-10">
            <input
              type="email"
              placeholder="Email Address"
              className="hover:border-violet-500 border-2 rounded-full w-90 h-10 p-2 text-xl shadow-lg"
            />
            <input
              type="password"
              placeholder="Password"
              className="hover:border-violet-500 border-2 shadow-lg rounded-full w-90 h-10 p-2 text-xl"
            />
          </form>

          <button className="hover:text-2xl bg-violet-700 text-white text-xl shadow-lg border-2 rounded-full m-6 w-90 h-12">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
export default Signin;
