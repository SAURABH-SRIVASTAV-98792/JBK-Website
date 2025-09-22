import "./assets/index.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Sectors from "./Components/Sectors";
import Career from "./Components/Career";
import Clients from "./Components/Clients";
import Solutions from "./Components/Solutions";
import Contact from "./Components/Contact";
import Signin from "./Components/Signin";
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
import QuestionPaperMang from "./pages/QuestionPaperMang";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import Scroll from "./Components/Scroll";

// Layout wrapper with Navbar + Footer
function Layout({ dark, setDark }) {
  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Scroll />
      <Navbar dark={dark} setDark={setDark} />
      <main className="flex-1">
        <Outlet /> {/* renders the current route */}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout dark={dark} setDark={setDark} />,
      children: [
        { index: true, element: <Home /> }, // Home page
        { path: "service", element: <Sectors /> }, // Sectors page
        { path: "career", element: <Career /> },
        { path: "clients", element: <Clients /> },
        { path: "products", element: <Products /> },
        { path: "solutions", element: <Solutions /> },
        { path: "contact", element: <Contact /> },
        { path: "signin", element: <Signin /> },
        { path: "paper", element: <QuestionPaperMang /> },
        { path: "app", element: <ApplicationMang /> },
        { path: "allocation", element: <AllocationMang /> },
        { path: "assessment", element: <AssessmentMang /> },
        { path: "marking", element: <DigiMarking /> },
        { path: "result", element: <DigiResult /> },
        { path: "pariksha", element: <DigitalPariksha /> },
        { path: "evaluation", element: <DigitalEvaluation /> },
        { path: "scoring", element: <DigitalScoring /> },
        { path: "gurukul", element: <DigitalGurukul /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
