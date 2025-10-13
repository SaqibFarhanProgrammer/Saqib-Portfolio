import React, { useContext } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import "../../App.css";
import { Context } from "../../context/context";
import logo from "../../assets/images/Picsart_25-09-27_11-27-17-348.png";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const { setisnabarisopen } = useContext(Context);

  return (
    <div className="hero-container z-20 relative w-full max-[531px]:h-[100vh] h-screen flex flex-col justify-between overflow-x-hidden bg-transparent">
      {/* ---------- Navbar ---------- */}
      <div className="top-navbar z-10 flex justify-between items-center px-1 py-3 sm:px-3 sm:pb-2 md:px-3">
        <div className="max-[531px]:pl-3">
          <img
            className="logo-img-1  h-[6vh] w-auto sm:h-[7vh] md:h-[8vh] mix-blend-screen"
            src={logo}
            alt="Main Logo"
          />
        </div>

        <div
          className="menu-button cursor-pointer  z-50ser flex items-center justify-center rounded-full fixed top-3 right-4 sm:right-6"
          onClick={() => setisnabarisopen(true)}
        >
          <HiOutlineMenuAlt4 className="menu-icon text-[7vw] sm:text-[4vw] md:text-[2vw]" />
        </div>
      </div>

      {/* ---------- Hero Text ---------- */}
      <div className="hero-text z-[5] h-[45vh] flex flex-col justify-center items-center text-center relative w-full">
        <div className="name text-white max-[531px]:gap-5  flex-col   font-['hB'] uppercase flex justify-center items-center text-center  sm:w-[70%] md:w-[50%]">
          <h1
            className="
      hero-text-h1
      text-[9vw]
      md:text-[7vw]
      font-bold
      leading-[5.4vw]

      /* Mobile-first adjustments */
      max-[531px]:text-[12vw]
      max-[531px]:leading-[12vw]
    "
          >
            FrontEnd
          </h1>
          <h1
            className="
      hero-text-h1
      text-[9vw]
      md:text-[7vw]
      font-bold
      leading-[5.4vw]

      /* Mobile-first adjustments */
      max-[531px]:text-[12vw]
    "
          >
            Developer
          </h1>
        </div>
      </div>

      {/* ---------- Bottom Section ---------- */}
      <div className="bottom flex flex-col sm:flex-row justify-between items-center sm:items-end p-4 sm:p-6 gap-4 sm:gap-8">
        <div className="flex-1 text-white text-[6vw] sm:text-[3vw] md:text-[1.8vw] uppercase font-['medium'] font-bold text-center sm:text-left">
          <h2>Saqib Farhan</h2>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <button className="hero-button text-[4vw] sm:text-[2vw] md:text-[1vw] font-['main'] rounded-full px-6 py-2 bg-white text-black transition-all duration-300 hover:bg-gray-200">
            Let Connect
          </button>
        </div>

        <div className="flex-1 text-white text-[3.5vw] sm:text-[2vw] md:text-[1vw] text-center sm:text-right font-['medium'] flex flex-col gap-2">
          <p className="pl-0 sm:pl-10 md:pl-20">
            Focused on performance, design, and modern frontend development.
          </p>
        </div>
      </div>

      {/* ---------- LinkedIn Floating Button ---------- */}
      <div
        className="
      max-[960px]:hidden

    linkedin absolute right-0 top-[480px] 
    bg-[#111] 
    h-[60px] w-[240px] 
    rounded-l-3xl 
    flex items-center justify-between gap-4 
    text-white cursor-pointer overflow-hidden

    /* Tablet screens */
    sm:top-[360px] sm:h-[70px] sm:w-[180px]

    /* Desktop screens */
    md:top-[320px] md:h-[80px] md:w-[200px]
  "
      >
        <div
          className="
      icon bg-zinc-100 
      h-full w-[70px] 
      flex justify-center items-center
      max-[531px]:hidden

      md:w-[50px]
    "
        >
          <FaLinkedin
            className="
        linkedin-icon text-[28px] 
        sm:text-[32px] 
        md:text-[36px] 
        text-black
      "
          />
        </div>

        <p
          className="
      pr-[16px] 
      font-['main'] capitalize 
      text-[22px]

      sm:pr-[20px] sm:text-[20px]
      md:pr-[24px] md:text-[18px]
    "
        >
          Linkedin
        </p>
      </div>
    </div>
  );
};

export default Hero;
