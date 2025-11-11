import React from "react";
import { Link } from "react-router-dom";
import { SiReact, SiFirebase, SiTailwindcss ,SiShadcnui} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import cora_ide from "../assets/images/CORA_IDE.jpeg";

const projects = [
  {
    title: "Cora IDE",
    subtitle: "Web Code Editor with Firebase Auth",
    description:
      "A web-based code editor where you can create, edit, delete, and download HTML, CSS, and JavaScript files. Features live code preview and user profiles.",
    features: [
      "Firebase authentication",
      "Create, edit, delete, and download JS/HTML/CSS files",
      "Live code preview (HTML, CSS, JS)",
      "User profile system",
    ],
    img: cora_ide,
    tech: [
      <SiReact className="text-cyan-400 text-3xl" />,
      <SiFirebase className="text-orange-500 text-3xl" />,
      <SiTailwindcss className="text-sky-400 text-3xl" />,
      <SiShadcnui className="text-purple-400 text-2xl sm:text-3xl" />,
    ],
    github: "https://github.com/yourusername/cora-ide",
    preview: "https://cora-ide.vercel.app/",
  },
];

const WorkRoute = () => {
  return (
    <section className="w-full z-10 relative min-h-screen text-white py-24 px-6 md:px-20">
      <div className="text-center mb-20">
        <h1 className="text-[10vw] sm:text-[6vw] md:text-[4vw] font-[HB] uppercase tracking-tight">
          Work
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-3">
          A showcase of my latest creative and technical projects combining
          precision design, smooth performance, and next-gen user experience.
        </p>
      </div>

      <div className="flex flex-col gap-28">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 w-full overflow-hidden rounded-3xl relative group shadow-[0_0_25px_rgba(255,255,255,0.05)]">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/5 blur-3xl"></div>
            </div>

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
                  <span key={i}>{icon}</span>
                ))}
              </div>

              <Link
                to={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-300 transition-all duration-300"
              >
                View on GitHub
              </Link>
              <a
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 ml-4 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-300 transition-all duration-300"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkRoute;
