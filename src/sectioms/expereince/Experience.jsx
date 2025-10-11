import React from "react";

const experiences = [
  {
    company: "Cora IDE",
    tagline: "Web-based code editor",
    role: "Frontend Developer",
    location: "Remote",
    industry: "Developer Tools",
    website: "github.com/yourusername/cora-ide",
    description: `I built a browser-based code editor that supports HTML, CSS, and JavaScript rendering. 
    It includes a file system, Google authentication, and code saving functionality. 
    Users can create, edit, and download their code files directly from the app, 
    making it a simple tool for testing and writing code online.`,
  },
  {
    company: "Neura AI",
    tagline: "AI-powered chat application",
    role: "Frontend Developer",
    location: "Remote",
    industry: "Artificial Intelligence",
    website: "github.com/yourusername/neura-ai",
    description: `I created an AI chat application using the Gemini API that allows users to chat directly with an AI assistant. 
    The app focuses on generating optimized and context-aware responses within a clean and responsive interface.`,
  },
  {
    company: "Crypto Dashboard",
    tagline: "Real-time cryptocurrency tracker",
    role: "Frontend Developer",
    location: "Remote",
    industry: "Finance and Technology",
    website: "github.com/yourusername/crypto-dashboard",
    description: `I developed a crypto dashboard that shows real-time cryptocurrency prices, market data, 
    and includes a built-in currency converter. This project helped me improve my skills 
    in API integration and building responsive, data-driven interfaces.`,
  },
  {
    company: "Quick Notes",
    tagline: "Minimal note-taking app",
    role: "Frontend Developer",
    location: "Remote",
    industry: "Productivity Tools",
    website: "github.com/yourusername/quick-notes",
    description: `I designed and built a simple note-taking application with a minimal UI, 
    featuring light and dark themes and local storage integration. 
    It provides a fast, distraction-free experience for managing notes.`,
  },
];

const Experience = () => {
  return (
    <section className="w-full min-h-screen z-20 relative bg-transparent text-white px-4 sm:px-6 lg:px-20 py-12">
      <h2 className="text-5xl sm:text-4xl pl-18 md:text-[4vw] font-bold mb-12 text-center sm:text-left max-[531px]:pl-0">
        EXPERIENCE
      </h2>

      <div className="flex flex-col gap-12 px-20 max-[531px]:px-2">
        {experiences.map((exp, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-3">
              <h3 className="text-xl sm:text-2xl font-semibold">{exp.company}</h3>
              <p className="text-white/70 mt-1 text-sm sm:text-base">{exp.tagline}</p>
            </div>

            <div className="md:col-span-3 space-y-1 text-white/80 text-sm sm:text-base">
              <p><span className="font-semibold">Position:</span> {exp.role}</p>
              <p><span className="font-semibold">Location:</span> {exp.location}</p>
              <p><span className="font-semibold">Industry:</span> {exp.industry}</p>
              <p>
                <span className="font-semibold">Website:</span>{" "}
                <a href={`https://${exp.website}`} target="_blank" className="underline">
                  {exp.website}
                </a>
              </p>
            </div>

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
