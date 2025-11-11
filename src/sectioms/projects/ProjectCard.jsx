import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  title,
  description,
  img,
  link,
  technologies,
  height,
  width,
}) => {
  const { react, firebase, tailwind, shadcn } = technologies || {};

  return (
    <div
      className="relative z-20 flex flex-col justify-end rounded-[5px] overflow-hidden bg-black shadow-lg group transition-transform duration-300 hover:-translate-y-1 w-full sm:w-[90%] md:w-[80%] mx-auto"
      style={{ height: height, width: width }}
    >
      <img
        src={img}
        alt={title}
        className="projectimage absolute  top-[-8px]  h-[100%] w-[100%] object-cover opacity-100"
      />

      <div className="relative  z-10 flex flex-col justify-between h-full p-4 sm:p-6 md:p-8">
        <div className="mt-auto">
          <h2 className="text-lg sm:text-xl font-['main'] md:text-2xl font-semibold text-white">
            {title}
          </h2>
          <p className="text-xs font-['main'] sm:text-sm md:text-base text-gray-300 mt-2 leading-relaxed max-w-full md:max-w-md">
            {description}
          </p>
        </div>

        <div className="flex flex-col max-[531px]:flex-row max-[531px]:items-center  sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
          <Link to="https://github.com/SaqibFarhanProgrammer/Cora-IDE">
            <button className="bg-white/10 backdrop-blur-md px-4 py-2 max-[531px]:py-1 sm:px-6  rounded-full text-xs sm:text-sm flex items-center gap-2 hover:bg-white/20 transition-all text-white w-fit">
              <i className="ri-github-fill text-lg sm:text-xl"></i> Github
            </button>
          </Link>

          <div className="flex itemss-center gap-2 sm:gap-4 opacity-70 flex-wrap">
            {react}
            {firebase}
            {tailwind}
            {shadcn}
          </div>

          <Link
            to={link}
            target="_blank"
            rel="noreferrer"
            className="self-end sm:self-auto"
          >
            <i className="ri-arrow-right-up-line text-3xl sm:text-5xl md:text-6xl text-white opacity-70 group-hover:opacity-100 transition"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
