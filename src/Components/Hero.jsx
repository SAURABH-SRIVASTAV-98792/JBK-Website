import { Link } from "react-router-dom";
function hero() {
  return (
    <>
      <div>
        <div>
          <h1> Innovative Education & Tech Solutions</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, reiciendis!
          </p>
          <div>
            <Link href="#services">Explore Service</Link>
            <Link href="#contact">Get a Quote</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default hero;
