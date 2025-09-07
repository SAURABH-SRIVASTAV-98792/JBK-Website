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
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={`${darkMode ? "dark" : ""}`}>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center justify-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="m-4 px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
          >
            {" "}
            Toggle {darkMode ? "Light" : "Dark"}
          </button>
          <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex flex-col">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sectors" element={<Sectors />} />
                <Route path="/career" element={<Career />} />
                <Route path="/clients" element={<Clints />} />
                <Route path="/solutions" element={<Soloutions />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Signin />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
