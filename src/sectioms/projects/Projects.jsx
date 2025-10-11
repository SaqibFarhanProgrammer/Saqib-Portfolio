// Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import image1 from "../../assets/ProjectsImages/Cerad - Macbook Pro Modern Mockups.jpg";
import image2 from "../../assets/ProjectsImages/Floating iPhone 15 Pro Mockup – Premium Dark Edition.jpg";
import image3 from "../../assets/ProjectsImages/Laptop Macbook Aesthetic Mockup.jpg";

// 🧩 React Icons imports
import { FaReact } from "react-icons/fa";
import { SiFirebase, SiTailwindcss, SiShadcnui } from "react-icons/si";

// Example projects data
const projects = [
  {
    title: "Elixur Jewelry Store",
    description: "E-commerce website for luxury jewelry.",
    img: image1,
    link: "#",
    technologies: {
      react: <FaReact className="text-cyan-400 text-3xl" />,
      firebase: <SiFirebase className="text-orange-500 text-3xl" />,
      tailwind: <SiTailwindcss className="text-sky-400 text-3xl" />,
      shadcn: <SiShadcnui className="text-purple-400 text-3xl" />,
    },
  },
  {
    title: "Portfolio Website",
    description: "Modern minimal portfolio website for a designer.",
    img: image2,
    link: "#",
  },
  {
    title: "Marketing Landing Page",
    description: "Responsive landing page for a digital campaign.",
    img: image3,
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="z-20 relative text-white h-screen bg-blue-950 font-sans py-0">
      <div className="container w-full h-[10%] mx-auto px-6 bg-green-900">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Work
        </h2>
      </div>

      <div className="bottom w-full bg-red-950 h-[90%] flex justify-between items-end p-4">
        <ProjectCard
          title={projects[0].title}
          description={projects[0].description}
          prevLink="#"
          githubLink="#"
          height="76vh"
          image={projects[0].img}
          width="50vw"
          technologies={projects[0].technologies}
        />
      </div>
    </div>
  );
};

export default Projects;
