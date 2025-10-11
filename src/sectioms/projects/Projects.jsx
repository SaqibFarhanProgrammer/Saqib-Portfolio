// Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

// 🖼️ Imported Project Images
import image1 from "../../assets/ProjectsImages/Cerad - Macbook Pro Modern Mockups.jpg";
import image2 from "../../assets/ProjectsImages/Floating iPhone 15 Pro Mockup – Premium Dark Edition.jpg";
import image3 from "../../assets/ProjectsImages/Laptop Macbook Aesthetic Mockup.jpg";

// 🧩 React Icons
import { FaReact } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiShadcnui } from "react-icons/si";

// 🌟 Projects Data
const projects = [
  {
    title: "Elixur Jewelry Store",
    description: "Luxury jewelry e-commerce built with modern UI and animations.",
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
    img: image2,
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
  return (
    <div className="z-20 relative text-white min-h-screen font-sans py-12 px-4 md:px-8">
      {/* Header */}
      <div className="container mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight">
          Work
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            prevLink={project.link}
            githubLink="#"
            height="70vh"
            image={project.img}
            width="100%"
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
