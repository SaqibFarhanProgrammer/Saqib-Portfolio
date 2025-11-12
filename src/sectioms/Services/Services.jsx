import React, { useState } from "react";
import "../../App.css";

// haan hogy commit
// haan hogy commit

const services = [
  {
    id: 1,
    title: "Frontend Development",
    // Yeh Pinterest image URL hai (placeholder) — tu apna correct URL yahan daal
    image:
      "https://cdn.dribbble.com/userupload/13628136/file/original-1749e1fb283c1f4a540c60694d2c5f99.png?resize=1600x1200&vertical=center",
    points: [
      "Responsive, mobile-first interfaces",
      "Component-driven architecture (React)",
      "Performance optimizations and accessibility",
    ],
  },
  {
    id: 2,
    title: "UI Design",
    image:
      "https://cdn.dribbble.com/userupload/44168173/file/original-1c449ae9eb19fd5dc54e2f218b206c9e.png?resize=1600x1067&vertical=center",
    points: [
      "Design systems and reusable components",
      "Pixel-perfect layouts and spacing",
      "High-fidelity prototypes for handoff",
    ],
  },
];

const Services = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="w-full z-10  flex flex-col px-4 py-8 sm:px-8 md:px-12 sm:py-12">
      {/* Heading */}
      <div className="top w-full z-20 text-center sm:text-left mb-8 sm:mb-12">
        <h1 className="text-[12vw] sm:text-[8vw] md:text-[5vw] font-[HB] uppercase">
          Services
        </h1>
      </div>

      {/* Layout */}
      <div className="flex z-10 flex-col md:flex-row justify-between gap-8 sm:gap-10">
        {/* Left Side Text */}
        <p className="md:w-[45%] w-full text-center md:text-left text-sm sm:text-base leading-relaxed text-gray-300">
          I focus on creating meaningful digital experiences that combine clean
          design, smooth performance, and accessibility helping brands stand out
          through functional, modern web interfaces.
        </p>

        {/* Right Accordion Section */}
        <div className="flex flex-col gap-4 w-full z-20 md:w-[50%]">
          {services.map((s) => {
            const isOpen = openId === s.id;

            return (
              <div
                key={s.id}
                className="bg-[#0A0A0C] border border-[#1a1a1a] rounded-xl overflow-hidden transition-all duration-500 ease-in-out"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenId(isOpen ? null : s.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none hover:bg-[#121214] transition-colors"
                >
                  <div>
                    <h2 className="text-base sm:text-lg font-medium">
                      {s.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      Trusted service offering
                    </p>
                  </div>
                  <svg
                    className={`h-5 w-5 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="p-4 sm:p-5 flex flex-col sm:flex-row gap-5 sm:gap-6 items-center sm:items-start">
                    <img
                      className="h-[25vh] w-full sm:w-[40%] object-cover rounded-md"
                      src={s.image}
                      alt={s.title}
                    />

                    <ul className="text-sm sm:text-base leading-relaxed text-gray-300 list-disc pl-5 w-full sm:w-[60%]">
                      {s.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
