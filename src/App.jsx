import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/index.css";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Sectors from "./Components/Sectors";
import Home from "./Components/Home";
import Career from "./Components/Career";
import Clints from "./Components/Clients";
import Solutions from "./Components/Solutions";
import Signin from "./Components/Signin";
import { useState } from "react";
import Products from "./Components/Products";

import ApplicationMang from "./pages/ApplicationMang";
import AssessmentMang from "./pages/AssessmentMang";
import AllocationMang from "./pages/AllocationMang";
import DigiMarking from "./pages/DigiMarking";
import DigiResult from "./pages/DigiResult";
import DigitalPariksha from "./pages/DigitalPariksha";
import DigitalEvaluation from "./pages/DigitalEvaluation";
import DigitalScoring from "./pages/DigitalScoring";
import DigitalGurukul from "./pages/DigitalGurukul";

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
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/products" element={<Products />} />

            {/* solution pages */}
            <Route path="/" element={<Solutions />} />
            <Route path="/application" element={<ApplicationMang />} />
            <Route path="/assessment" element={<AssessmentMang />} />
            <Route path="/allocation" element={<AllocationMang />} />
            <Route path="/digi-marking" element={<DigiMarking />} />
            <Route path="/digi-result" element={<DigiResult />} />

            {/* product page */}
            <Route path="/" element={<Products />} />
            <Route path="/digitalpriksha" element={<DigitalPariksha />} />
            <Route path="/digitalevaluation" element={<DigitalEvaluation />} />
            <Route path="/digitalscoring" element={<DigitalScoring />} />
            <Route path="/digitalgurukul" element={<DigitalGurukul />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
