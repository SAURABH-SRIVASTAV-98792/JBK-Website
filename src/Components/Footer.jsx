import { Link } from "react-router-dom";
function footer() {
  return (
    <>
      <div className="border bg-blue-950 grid grid-cols-2 text-white ">
        <div>
          <p className="text-blue-400 text-4xl">KriRit India</p>
          <p className="text-2xl m-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
            laboriosam.
          </p>
        </div>
        <div>
          <p className="text-4xl text-blue-400">QUICK LINKS</p>
          <div className="flex flex-col gap-y-4 m-4 text-2xl">
            <Link to="/about">
              {" "}
              <p className="hover:text-blue-500">ABOUT US</p>
            </Link>
            <Link to="/choose">
              {" "}
              <p className="hover:text-blue-500">WHY CHOOSE US</p>
            </Link>
            <Link to="/contact">
              {" "}
              <p className="hover:text-blue-500">CONTACT US</p>
            </Link>
            <Link to="/career">
              {" "}
              <p className="hover:text-blue-500">CAREER</p>
            </Link>
            <Link to="/clients">
              {" "}
              <p className="hover:text-blue-500">CLIENTS</p>
            </Link>
          </div>
        </div>
        <div>
          <p className="text-4xl text-blue-400">PRODUCTS</p>
          <div className="flex flex-col gap-y-4 text-2xl">
            <p>Digital Pariksha</p>
            <p>Digital Evaluation</p>
            <p>Digital Scoring</p>
            <p>Digital Grukul</p>
          </div>
        </div>
        <div>
          <p className="text-4xl text-blue-400">GET IN TOUCH</p>
          <div className="flex flex-col gap-y-4 m-4 text-2xl">
            <p>
              {" "}
              <a href="">saurabhsrivastav0999@gmail.com</a>
            </p>
            <a href="">agamsrivastav@gmail.com</a>
            <p>6306536110</p>
            <address>
              B1/E14, Second Floor, NH-19, near LIC Building, Block E Mohan
              Co-operative Industrial Estate, Near LIC Building, New Delhi
              110044.
            </address>
          </div>
        </div>
        <div className="border-2 w-screen flex justify-start gap-x-4 h-30 ">
          <Link to="/">
            {" "}
            <p className="hover:text-blue-500">Home</p>
          </Link>
          <Link to="/about">
            <p className="hover:text-blue-500">ABOUT US</p>
          </Link>

          <Link to="/sectors">
            <p className="hover:text-blue-500">SECTORS WE SERVE</p>
          </Link>
          <Link to="/career">
            <p className="hover:text-blue-500">CAREER</p>
          </Link>
          <Link to="/clients">
            <p className="hover:text-blue-500">CLIENTS</p>
          </Link>
          <Link to="/products">
            <p className="hover:text-blue-500">PRODUCTS</p>
          </Link>
          <Link to="/solutions">
            <p className="hover:text-blue-500">SOLUTIONS</p>
          </Link>
          <Link to="/contact">
            <p className="hover:text-blue-500">CONTACT US</p>
          </Link>
        </div>
        <div className="ml-auto flex justify-start gap-x-4">
          <p>Term and condition</p>
          <p>Privacy Policy</p>
          <p>Refund and Cancellation</p>
        </div>
      </div>
    </>
  );
}
export default footer;
