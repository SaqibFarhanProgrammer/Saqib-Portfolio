import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-10 text-zinc-400 py-10 px-6 md:px-16 overflow-hidden">
      {/* ✅ Radial gradient changed to white */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(154%_140%_at_50%_10%,transparent_40%,white_120%)]"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-white text-2xl font-['main'] tracking-wide">
            Saqib Farhan
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-xs">
            Crafting timeless jewelry and elegant designs that define your style.
          </p>

          {/* ✅ Contact Info */}
          <div className="mt-4 text-sm space-y-1">
            <p><span className="text-white">Phone:</span> +92 2306033585</p>
            <p><span className="text-white">Email:</span> saqibkhatai@gmail.com</p>
            <p><span className="text-white">Address:</span> Pakistan</p>
          </div>
        </div>

        {/* Center Links */}
        <div className="flex flex-col md:flex-row gap-5 text-sm font-light">
          <Link to="#home" className="hover:text-white transition-colors">Home</Link>
          <Link to="#work" className="hover:text-white transition-colors">Work</Link>
          <Link to="#services" className="hover:text-white transition-colors">Services</Link>
          <Link to="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Right Social Icons */}
        <div className="flex gap-5">
          <Link to="https://www.linkedin.com/in/saqib-farhan-214590340" className="hover:text-white transition-colors"><FaLinkedinIn size={18} /></Link>
          <Link to="https://github.com/SaqibFarhanProgrammer" className="hover:text-white transition-colors"><FaGithub size={18} /></Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-zinc-700 mt-10 pt-5 text-center text-sm text-zinc-500 relative z-10">
        © {new Date().getFullYear()} Elixur. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

