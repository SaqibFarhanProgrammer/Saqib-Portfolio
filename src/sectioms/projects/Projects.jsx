import React from "react";
import ProjectCard from "./ProjectCard";

import image3 from "../../assets/images/CORA_IDE.jpeg";
import { FaReact } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiShadcnui } from "react-icons/si";

const projects = [
  {
    title: "Cora-IDE",
    description:
      "Created a web-based code editor in React with Firebase authentication and a modern ShadCN + Tailwind UI.",
    img: image3,
    link: "#",
    github:"https://github.com/SaqibFarhanProgrammer/Cora-IDE.git",
    technologies: {
      react: <FaReact className="text-cyan-400 text-2xl sm:text-3xl" />,
      firebase: <SiFirebase className="text-orange-500 text-2xl sm:text-3xl" />,
      tailwind: <SiTailwindcss className="text-sky-400 text-2xl sm:text-3xl" />,
      shadcn: <SiShadcnui className="text-purple-400 text-2xl sm:text-3xl" />,
    },
  },
];

const Projects = () => {
  return (
    <div className="z-10 relative text-white font-sans py-1">
      <div className="container mx-auto mb-12">
        <h2 className="text-6xl sm:text-8xl md:text-9xl font-['HB'] uppercase font-bold text-center tracking-tight leading-tight">
          Work
        </h2>
      </div>

      <div className="w-[100%] h-auto flex overflow-x-hidden flex-col  items-center md:items-end justify-center p-3 sm:p-2 gap-6 md:gap-4">
        {projects.map((p) => {
          return (
            <ProjectCard
              title={p.title}
              description={p.description}
              img={image3}

              github={p.github}
              link="https://cora-ide.vercel.app/"
              technologies={{
                react: (
                  <FaReact className="text-cyan-400 text-lg sm:text-xl md:text-3xl" />
                ),
                firebase: (
                  <SiFirebase className="text-orange-500 text-lg sm:text-xl md:text-3xl" />
                ),
                tailwind: (
                  <SiTailwindcss className="text-sky-400 text-lg sm:text-xl md:text-3xl" />
                ),
              }}
              height="80vh"
              width="85vw"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
