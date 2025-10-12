import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" footer  text-zinc-400 py-10 px-6 md:px-16 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 z-10 relative">

        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10 relative">
          <h2 className="text-white text-2xl font-['main'] tracking-wide z-10 relative">
            Saqib Farhan
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-xs z-10 relative">
            Crafting timeless jewelry and elegant designs that define your style.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex flex-col md:flex-row gap-5 text-sm font-light z-10 relative">
          <a href="#home" className="hover:text-white transition-colors z-10 relative">
            Home
          </a>
          <a href="#work" className="hover:text-white transition-colors z-10 relative">
            Work
          </a>
          <a href="#services" className="hover:text-white transition-colors z-10 relative">
            Services
          </a>
          <a href="#contact" className="hover:text-white transition-colors z-10 relative">
            Contact
          </a>
        </div>

        {/* Right Social Icons */}
        <div className="flex gap-5 z-10 relative">
          <a href="#" className="hover:text-white transition-colors z-10 relative">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="hover:text-white transition-colors z-10 relative">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="hover:text-white transition-colors z-10 relative">
            <FaLinkedinIn size={18} />
          </a>
          <a href="#" className="hover:text-white transition-colors z-10 relative">
            <FaGithub size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-zinc-700 mt-10 pt-5 text-center text-sm text-zinc-500 z-10 relative">
        © {new Date().getFullYear()} Elixur. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
