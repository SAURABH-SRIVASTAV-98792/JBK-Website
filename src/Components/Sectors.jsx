function Sectors() {
  return (
    <>
      {/* page-4 */}

      <div className="border p-8">
        <p className="text-center text-4xl">SECTORS WE SERVE</p>
      </div>

      {/* page-5 */}

      <div className="border flex justify-between gap-3 grid grid-cols-2 grid-rows-2 text-3xl gap-x-0 gap-y-0">
        <div className="border p-20 ">
          <a href="">EDUCATION SECTOR</a>
        </div>
        <div className="border">
          <a href="">GOVERNMENT</a>
        </div>
        <div className="border">
          <a href="">PRIVATE SECTOR</a>
        </div>
        <div className="border">
          <a href="">HEALTH CARE</a>
        </div>
        <div className="border p-20 ">
          <a href="">COMMERCIAL</a>
        </div>
        <div className="border">
          <a href="">COLLEGE</a>
        </div>
      </div>
    </>
  );
}
export default Sectors;
