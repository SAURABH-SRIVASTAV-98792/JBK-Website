import Crousel from "./Crousel";
function Home() {
  return (
    <>
      {/* page-3 */}

      <Crousel className="w-full" />

      {/* page-6 */}

      <div className="border bg-violet-700">
        <h1 className="text-4xl ">WHY KRIRIT INDIA?</h1>

        <p className="text-2xl w-1/2 pr-8 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem fugit
          et commodi nemo. Aliquid nisi architecto, alias numquam tempore
          exercitationem?
        </p>
        <img
          src="/Images/why-kririt-india.jpg"
          alt=""
          className="ml-auto w-100 h-100"
        />
      </div>

      {/* page-7 */}

      <div className="border grid grid-cols-2 grid-rows-2 text-2xl gap-y-20 bg-cyan-600">
        <p>Reliability</p>
        <p>Scalability</p>
        <p>Time saving</p>
        <p>Secure and confidential</p>
        <p>Enhanced efficency</p>
      </div>

      {/* page-8 */}

      <div className="border border-amber-300 p-10">
        <h1 className="text-5xl text-center">PRODUCT WE OFFER</h1>
      </div>

      {/* page-9 */}

      <div className="border">
        <h1 className="text-4xl">DIGITAL PARIKSHA</h1>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          exercitationem voluptate cupiditate consectetur unde deserunt, vitae
          optio! Nisi, aut eveniet?
        </p>
        <button className="bg-blue-400 text-white m-10 text-3xl">
          LEARN NOW
        </button>
      </div>

      {/* page-10 */}

      <div className="border">
        <h1 className="text-4xl">DIGITAL SCCORING</h1>
        <p className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          adipisci, repudiandae quae accusamus ab est nisi commodi velit unde
          fugiat?
        </p>
        <button className="bg-blue-400 text-white m-10 text-3xl">
          LEARN NOW
        </button>
      </div>
    </>
  );
}
export default Home;
