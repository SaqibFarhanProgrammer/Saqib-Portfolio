import React, { useContext } from "react";
import openIcon from "../assets/icons/imgi_138_default.png";
import { Context } from "../context/context";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isnabarisopen, setisnabarisopen } = useContext(Context);

  return (
    <div
      className={`
        fixed z-50 rounded-[20px] top-0 backdrop-blur-2xl h-[100%] w-[30%] transition-all duration-500
        ${isnabarisopen ? "right-0" : "-right-full"}
        max-[1024px]:w-[45%] 
        max-[531px]:w-[75%] 
        max-[531px]:rounded-none
      `}
    >
      <img
        onClick={() => setisnabarisopen(!isnabarisopen)}
        className="
          h-8 absolute rotate-90 right-8 top-5 cursor-pointer
          max-[1024px]:h-[26px]
          max-[531px]:h-[22px] max-[531px]:right-5 max-[531px]:top-4
        "
        src={openIcon}
        alt="close"
      />

      <div
        className="
          top h-[85%] text-white text-6xl flex flex-col text-start items-start p-10 pt-[11vw]
          max-[1024px]:text-[42px] max-[1024px]:p-8 max-[1024px]:pt-[20vw]
          max-[531px]:text-[26px] max-[531px]:p-6 max-[531px]:pt-[28vw]
        "
      >
        <Link className="navbar-links leading-[4vw] max-[531px]:leading-[10vw] max-[531px]:text-[10vw] max-[1024px]:leading-[6vw]">
          Home
        </Link>
        <Link to="/work" className="navbar-links leading-[4vw] max-[531px]:leading-[10vw] max-[531px]:text-[10vw] max-[1024px]:leading-[6vw]">
          Work
        </Link>
        <Link to="/Services" className="navbar-links leading-[4vw] max-[531px]:leading-[10vw] max-[531px]:text-[10vw] max-[1024px]:leading-[6vw]">
          Services
        </Link>
        <Link className="navbar-links leading-[4vw] max-[531px]:leading-[10vw] max-[531px]:text-[10vw] max-[1024px]:leading-[6vw]">
          Contact
        </Link>
        <Link className="navbar-links leading-[4vw] max-[531px]:leading-[10vw] max-[531px]:text-[10vw] max-[1024px]:leading-[6vw]">
          About
        </Link>
      </div>

      <div
        className="
          bottom flex h-[15%] border-t font-['main'] border-[#717171] gap-6 text-[1.2vw] justify-center items-center text-zinc-400
          max-[1024px]:text-[16px] max-[1024px]:gap-4
          max-[531px]:text-[13px] max-[531px]:gap-3 max-[531px]:h-[80px]
        "
      >
        <button className="flex items-center gap-2 hover:text-white transition-colors">
          <FaLinkedin className="text-sm" />
          Linkedin
        </button>
        <button className="flex items-center gap-2 hover:text-white transition-colors">
          <FaGithub className="text-sm" />
          Github
        </button>
        <button className="flex items-center gap-2 hover:text-white transition-colors">
          <HiOutlineDocumentText className="text-sm" />
          Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
