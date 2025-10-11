import React from "react";
import "./App.css";
import "./Media.css";
import Hero from "./sectioms/Hero/Hero";
import Projects from "./sectioms/projects/Projects";
import gridbg from ".//assets/images/sims 4 cc.jfif";
import About from "./sectioms/About/About";
import LenisApp from "./LenisProvider";
import Services from "./sectioms/Services/Services";
import Skills from "./sectioms/Skills/Skills";
import SkillsHeading from "./sectioms/SkillsHeading";
import Experience from "./sectioms/expereince/Experience";
const App = () => {
  return (
    <div data-scroll-container className=" h-screen  relative ">
      <img
        className="absolute object-cover w-[100%] h-[100%] opacity-[.02]"
        src={gridbg}
        alt=""
      />
      <LenisApp>
        <Hero />
        <About />
        <Projects />
        <Services/>
        <SkillsHeading/>
        <Skills/>
        <Experience/>
      </LenisApp>
    </div>
  );
};

export default App;
