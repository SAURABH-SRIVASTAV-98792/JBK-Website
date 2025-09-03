import { Link } from "react-router-dom";
function navbar() {
  return (
    <>
      <header className="nav">
        <div className="topbar">
          <div className="topbar-container">
            <div className="tobar-left">
              <div className="email">
                <a href="#">
                  <span>saurabhsrivastav@gmail.com</span>
                </a>
              </div>
              <div className="hotline">
                <a href="#">
                  <span>6306536110</span>
                </a>
              </div>
            </div>
            <div className="topbar-right">
              <div></div>
            </div>
          </div>
        </div>

        <div className="nav-inner">
          <div className="logo">
            {" "}
            <img src="/Images/logo-color-1.png" alt="" />
          </div>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </header>
    </>
  );
}
export default navbar;
