import React from "react";

const Button = ({ text }) => {
  return (
    <div className="mt-8 ml-39 md:mt-12">
      <a
        href="#work"
        className="about-button relative inline-flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-black/70 overflow-hidden group transition-colors duration-500 ease-in-out text-black"
      >
        {/* Background span */}
        <span className="absolute bottom-[-100%] left-1/2 -translate-x-1/2 w-2/5 h-full rounded-full bg-black -z-10 transition-all duration-300 ease-in-out group-hover:bottom-0 group-hover:w-full"></span>

        {/* Button text */}
        <span className="relative z-10 font-medium group-hover:text-white">
          {text}
        </span>

        {/* Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 md:w-5 md:h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
        >
          <path d="M7 7h10v10" />
          <path d="M7 17l10-10" />
        </svg>
      </a>
    </div>
  );
};

export default Button;
