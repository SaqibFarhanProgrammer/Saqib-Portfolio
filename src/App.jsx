import React, { Suspense, lazy, useContext } from "react";
import "./App.css";
import "./Media.css";
import LenisApp from "./LenisProvider";
import "remixicon/fonts/remixicon.css";
import { Routes, Route } from "react-router-dom";
import { Context } from "./context/context";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import WorkRoute from "./routes/WorkRoute";
import Contact from "./routes/ContactRoute";

const Hero = lazy(() => import("./sectioms/Hero/Hero"));
const Projects = lazy(() => import("./sectioms/projects/Projects"));
const About = lazy(() => import("./sectioms/About/About"));
const Services = lazy(() => import("./sectioms/Services/Services"));
const Skills = lazy(() => import("./sectioms/Skills/Skills"));
const SkillsHeading = lazy(() => import("./sectioms/SkillsHeading"));
const Experience = lazy(() => import("./sectioms/expereince/Experience"));
const ContactForm = lazy(() => import("./sectioms/contact/Contact"));
const Footer = lazy(() => import("./sectioms/footer/Footer"));
const ServiceRoute = lazy(() => import("./routes/ServiceRoute"));

const Loader = () => (
  <div className="flex justify-center items-center h-screen text-white text-lg">
    Loading...
  </div>
);

const App = () => {
  const { setisnabarisopen } = useContext(Context);
  return (
    <div data-scroll-container className="h-screen relative">
      <div
        className="menu-button cursor-pointer  z-40 ser flex items-center justify-center rounded-full fixed top-3 right-4 sm:right-6"
        onClick={() => setisnabarisopen(true)}
      >
        <HiOutlineMenuAlt4 className="menu-icon text-[7vw] sm:text-[4vw] md:text-[2vw]" />
      </div>
      <div className="fixed-section fixed h-screen top-0 left-0 w-full bg-transparent grid-bg z-5"></div>
      
      <LenisApp>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Projects />
                  <Services />
                  <SkillsHeading />
                  <Skills />
                  <Experience />
                  <ContactForm />
                  <Footer />
                </>
              }
            />
            <Route path="/services" element={<ServiceRoute />} />
            <Route path="/work" element={<WorkRoute />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </LenisApp>
    </div>
  );
};

export default App;
