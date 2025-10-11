import React from "react";

const ProjectCard = ({
  title,
  height,
  width,
  prevLink,
  githubLink,
  description,
  image,
  technologies,
}) => {
  const { react, firebase, tailwind, shadcn } = technologies || {};

  return (
    <div
      className="relative flex flex-col justify-end rounded-2xl overflow-hidden bg-black shadow-lg group transition-transform duration-300 hover:-translate-y-1
                 w-full sm:w-[90%] md:w-[80%] lg:w-[width] mx-auto"
      style={{ height: height }}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="projectimage absolute inset-0 h-full w-full object-cover opacity-100"
      />

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-6 md:p-8">
        {/* Title & Description */}
        <div className="mt-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
            {title}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-2 leading-relaxed max-w-full md:max-w-md">
            {description}
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6">
          {/* GitHub Button */}
          <button className="bg-white/10 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm flex items-center gap-2 hover:bg-white/20 transition-all text-white w-fit">
            <i className="ri-github-fill text-lg sm:text-xl"></i> Github
          </button>

          {/* Technologies */}
          <div className="flex items-center gap-2 sm:gap-4 opacity-70 flex-wrap">
            {react}
            {firebase}
            {tailwind}
            {shadcn}
          </div>

          {/* Preview Arrow */}
          <a
            href={prevLink}
            target="_blank"
            rel="noreferrer"
            className="self-end sm:self-auto"
          >
            <i className="ri-arrow-right-up-line text-3xl sm:text-5xl md:text-6xl text-white opacity-70 group-hover:opacity-100 transition"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
