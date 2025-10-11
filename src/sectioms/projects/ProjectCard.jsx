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
      className="relative flex flex-col justify-end rounded-2xl overflow-hidden bg-black shadow-lg group transition-transform duration-300 hover:-translate-y-1"
      style={{ width: width, height: height }}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="projectimage absolute inset-0 h-full w-full object-cover opacity-100 projectimage"
      />

      {/* Gradient Overlay (Top Fade) */}

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6">
        {/* Title & Description */}
        <div className="mt-auto">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <p className="text-sm text-gray-300 mt-2 max-w-md leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-6">
          {/* GitHub Button */}
          <button className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-white/20 transition-all text-white">
            <i className="ri-github-fill text-xl"></i> Github
          </button>

          {/* Technologies */}
          <div className="flex items-center gap-3 opacity-70">
            {react}
            {firebase}
            {tailwind}
            {shadcn}
          </div>

          {/* Preview Arrow */}
          <a href={prevLink} target="_blank" rel="noreferrer">
            <i className="ri-arrow-right-up-line text-4xl text-white opacity-70 group-hover:opacity-100 transition"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
