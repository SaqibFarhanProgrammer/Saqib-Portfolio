import React from 'react';

// Example projects data
const projects = [
  {
    title: "Elixur Jewelry Store",
    description: "E-commerce website for luxury jewelry.",
    img: "https://i.pinimg.com/564x/xx/xx/xx/xx.jpg", // Replace with Pinterest laptop mockup
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern minimal portfolio website for a designer.",
    img: "https://i.pinimg.com/564x/yy/yy/yy/yy.jpg",
    link: "#",
  },
  {
    title: "Marketing Landing Page",
    description: "Responsive landing page for a digital campaign.",
    img: "https://i.pinimg.com/564x/zz/zz/zz/zz.jpg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className=' z-20 relative text-white min-h-screen font-sans py-20'>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Laptop Mockup */}
              <div className="w-full h-[220px] md:h-[250px] lg:h-[280px] relative">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-300 mt-1">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
