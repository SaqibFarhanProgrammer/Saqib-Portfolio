import React from "react";
import "remixicon/fonts/remixicon.css";

const projects = [
  {
    title: "Cora IDE",
    subtitle: "Web-based Code Editor",
    description:
      "A powerful in-browser IDE that supports live HTML, CSS, and JavaScript previewing. Includes Google Auth, file system integration, and autosave to enhance developer workflow.",
    features: [
      "Live code rendering",
      "Integrated Google Authentication",
      "Cloud-based file system",
      "Dark & light theme support",
    ],
    img: "https://cdn.dribbble.com/userupload/43531597/file/still-21f3b392795691c0e4a20bf6bdd722b6.png?format=webp&resize=1200x900",
    tech: [
      "ri-reactjs-line text-cyan-400",
      "ri-fire-line text-orange-500",
      "ri-tailwind-css-line text-sky-400",
    ],
    github: "https://github.com/yourusername/cora-ide",
  },
  {
    title: "Neura AI",
    subtitle: "AI-powered Chat Application",
    description:
      "A futuristic chat application using the Gemini API for intelligent, real-time conversations. Built with a focus on speed, accessibility, and design simplicity.",
    features: [
      "Real-time AI chat engine",
      "Responsive modern UI",
      "Gemini API integration",
      "Message memory system",
    ],
    img: "https://cdn.dribbble.com/userupload/44206437/file/ecc0b2123d2c73d5f2fce314bcd5abc6.jpg?format=webp&resize=1200x900",
    tech: [
      "ri-reactjs-line text-cyan-400",
      "ri-brain-line text-amber-400",
      "ri-tailwind-css-line text-sky-400",
    ],
    github: "https://github.com/yourusername/neura-ai",
  },
  {
    title: "Crypto Dashboard",
    subtitle: "Real-time Cryptocurrency Tracker",
    description:
      "A sleek and responsive crypto tracking platform that visualizes live prices, charts, and market trends using APIs. Designed with a focus on UI/UX minimalism.",
    features: [
      "Live market updates",
      "Portfolio performance tracking",
      "Exchange rate converter",
      "Interactive graph analytics",
    ],
    img: "https://cdn.dribbble.com/userupload/43513183/file/original-5f043b10f20a4c046d928335de60fffd.png?format=webp&resize=1200x900",
    tech: [
      "ri-reactjs-line text-cyan-400",
      "ri-line-chart-line text-green-400",
      "ri-currency-line text-yellow-400",
    ],
    github: "https://github.com/yourusername/crypto-dashboard",
  },
];

const WorkRoute = () => {
  return (
    <section className="w-full relative z-[101] min-h-screen bg-black text-white py-24 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-[10vw] sm:text-[6vw] md:text-[4vw] font-[HB] uppercase tracking-tight">
          Work
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          A showcase of my latest creative and technical projects — combining
          precision design, smooth performance, and next-gen user experience.
        </p>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-28">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full overflow-hidden rounded-3xl relative group shadow-[0_0_25px_rgba(255,255,255,0.05)]">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/5 blur-3xl"></div>
            </div>

            {/* Details */}
            <div className="md:w-1/2 w-full space-y-5">
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                {project.title}
              </h2>
              <h3 className="text-gray-400">{project.subtitle}</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <div className="flex items-center gap-4 pt-3">
                {project.tech.map((icon, i) => (
                  <i key={i} className={`${icon} text-2xl sm:text-3xl`}></i>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-300 transition-all duration-300"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkRoute;
