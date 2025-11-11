import React from "react";

const experiences = [
  {
    company: "Cora IDE",
    tagline: "Web-based code editor",
    techStack: "React, Firebase, Tailwind CSS ShadCN",
    github: "github.com/yourusername/cora-ide",
    description: `I built a browser-based code editor that supports HTML, CSS, and JavaScript rendering. 
    It includes a file system, Google authentication, and code saving functionality. 
    Users can create, edit, and download their code files directly from the app, 
    making it a simple tool for testing and writing code online.`,
  },


  {
    company: "Quick Notes",
    tagline: "Minimal note-taking app",
    techStack: "React, LocalStorage API, Tailwind CSS",
    github: "github.com/yourusername/quick-notes",
    description: `I designed and built a simple note-taking application with a minimal UI, 
    featuring light and dark themes and local storage integration. 
    It provides a fast, distraction-free experience for managing notes.`,
  },
];

const Experience = () => {
  return (
    <section className="w-full m z-20 relative bg-transparent text-white px-4 sm:px-6 lg:px-20 py-12">
      <div className="w-full h-auto flex justify-center items-center">
        <h2 className="text-5xl w-[100%] text-center sm:text-4xl pl-18 md:text-[4vw] font-bold mb-12 sm:text-left max-[531px]:pl-0">
          EXPERIENCE
        </h2>
      </div>

      <div className="flex flex-col gap-12 px-20 max-[531px]:px-2">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
          >
            {/* Company Info */}
            <div className="md:col-span-3">
              <h3 className="text-xl sm:text-2xl font-semibold">
                {exp.company}
              </h3>
              <p className="text-white/70 mt-1 text-sm sm:text-base">
                {exp.tagline}
              </p>
            </div>

            {/* Project Details */}
            <div className="md:col-span-3 space-y-1 text-white/80 text-sm sm:text-base">
              <p>
                <span className="font-semibold">Tech Stack:</span> {exp.techStack}
              </p>
              <p>
                <span className="font-semibold">GitHub:</span>{" "}
                <a
                  href={`https://${exp.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {exp.github}
                </a>
              </p>
            </div>

            {/* Description */}
            <div className="md:col-span-6 text-white/70 leading-relaxed text-sm sm:text-base">
              {exp.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
