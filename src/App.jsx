import { Routes, Route } from "react-router-dom";
import "./assets/index.css";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Sectors from "./Components/Sectors";
import Home from "./Components/Home";
import Career from "./Components/Career";
import Clints from "./Components/Clients";
import Soloutions from "./Components/Solutions";
import Signin from "./Components/Signin";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <div
        className={`min-h-screen flex flex-col transition-colors duration-500 ${
          dark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <Navbar dark={dark} setDark={setDark} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/career" element={<Career />} />
            <Route path="/clients" element={<Clints />} />
            <Route path="/solutions" element={<Soloutions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
