import React from "react";
import ProjectCard from "./ProjectCard";
import image1 from "../../assets/ProjectsImages/Cerad - Macbook Pro Modern Mockups.jpg";
import image2 from "../../assets/ProjectsImages/Floating iPhone 15 Pro Mockup – Premium Dark Edition.jpg";
import image3 from "../../assets/ProjectsImages/Laptop Macbook Aesthetic Mockup.jpg";
import { FaReact } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiShadcnui } from "react-icons/si";

const projects = [
  {
    title: "Elixur Jewelry Store",
    description:
      "Luxury jewelry e-commerce built with modern UI and animations.",
    img: image1,
    link: "#",
    technologies: {
      react: <FaReact className="text-cyan-400 text-2xl sm:text-3xl" />,
      firebase: <SiFirebase className="text-orange-500 text-2xl sm:text-3xl" />,
      tailwind: <SiTailwindcss className="text-sky-400 text-2xl sm:text-3xl" />,
      shadcn: <SiShadcnui className="text-purple-400 text-2xl sm:text-3xl" />,
    },
  },
  {
    title: "Portfolio Website",
    description: "Minimal and clean portfolio for a creative designer.",
    img2: image2,
    link: "#",
    technologies: {
      react: <FaReact className="text-cyan-400 text-2xl sm:text-3xl" />,
      tailwind: <SiTailwindcss className="text-sky-400 text-2xl sm:text-3xl" />,
    },
  },
  {
    title: "Marketing Landing Page",
    description: "High-conversion landing page for digital campaigns.",
    img: image3,
    link: "#",
    technologies: {
      react: <FaReact className="text-cyan-400 text-2xl sm:text-3xl" />,
      tailwind: <SiTailwindcss className="text-sky-400 text-2xl sm:text-3xl" />,
      firebase: <SiFirebase className="text-orange-500 text-2xl sm:text-3xl" />,
    },
  },
];

const Projects = () => {
  const project = projects[0];

  return (
    <div className="z-10 relative text-white font-sans py-1">
      <div className="container mx-auto mb-12">
        <h2 className="text-6xl sm:text-8xl md:text-9xl font-['HB'] uppercase font-bold text-center tracking-tight leading-tight">
          Work
        </h2>
      </div>  

    
      <div className="w-[100%] h-auto flex overflow-x-hidden flex-col  items-center md:items-end justify-center p-3 sm:p-2 gap-6 md:gap-4">
        <ProjectCard
          title="Marketing Landing Page"
          description="High-conversion responsive landing page designed for digital campaigns with engaging visuals and CTA focus."
          img={image3}
          link="#"
          technologies={{
            react: <FaReact className="text-cyan-400 text-lg sm:text-xl md:text-3xl" />,
            firebase: <SiFirebase className="text-orange-500 text-lg sm:text-xl md:text-3xl" />,
            tailwind: <SiTailwindcss className="text-sky-400 text-lg sm:text-xl md:text-3xl" />,
          }}
          height="80vh"
          width="85vw"
        />
        <ProjectCard
          title="Marketing Landing Page"
          description="High-conversion responsive landing page designed for digital campaigns with engaging visuals and CTA focus."
          img={image3}
          link="#"
          technologies={{
            react: <FaReact className="text-cyan-400 text-lg sm:text-xl md:text-3xl" />,
            firebase: <SiFirebase className="text-orange-500 text-lg sm:text-xl md:text-3xl" />,
            tailwind: <SiTailwindcss className="text-sky-400 text-lg sm:text-xl md:text-3xl" />,
          }}
          height="80vh"
          width="85vw"
        />
      </div>
      <div className="w-[100%] h-auto flex overflow-x-hidden flex-col  items-center md:items-end justify-center p-3 sm:p-2 gap-6 md:gap-4">
        <ProjectCard
          title="Marketing Landing Page"
          description="High-conversion responsive landing page designed for digital campaigns with engaging visuals and CTA focus."
          img={image3}
          link="#"
          technologies={{
            react: <FaReact className="text-cyan-400 text-lg sm:text-xl md:text-3xl" />,
            firebase: <SiFirebase className="text-orange-500 text-lg sm:text-xl md:text-3xl" />,
            tailwind: <SiTailwindcss className="text-sky-400 text-lg sm:text-xl md:text-3xl" />,
          }}
          height="80vh"
          width="85vw"
        />
        <ProjectCard
          title="Marketing Landing Page"
          description="High-conversion responsive landing page designed for digital campaigns with engaging visuals and CTA focus."
          img={image3}
          link="#"
          technologies={{
            react: <FaReact className="text-cyan-400 text-lg sm:text-xl md:text-3xl" />,
            firebase: <SiFirebase className="text-orange-500 text-lg sm:text-xl md:text-3xl" />,
            tailwind: <SiTailwindcss className="text-sky-400 text-lg sm:text-xl md:text-3xl" />,
          }}
          height="80vh"
          width="85vw"
        />
      </div>


    </div>
  );
};

export default Projects;
