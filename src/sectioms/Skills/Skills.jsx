import React from "react";

const skillsData = [
  {
    name: "React.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "shadcn/ui",
    image: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
  },
  {
    name: "Tailwind CSS",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
];

const basicKnowledge = [
  {
    name: "Next.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "Postman",
    image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "Figma",
    image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen w-full z-20  px-6 py-10 sm:px-8 md:px-12 md:py-16 text-white">
      <div className="max-w-6xl z-20 mx-auto flex flex-col md:flex-row gap-10 md:gap-12">
        {/* Left Side Heading */}
        <div className="md:w-1/2 z-20 flex items-start justify-center md:justify-start">
          <div className="w-full md:sticky md:top-24 text-center md:text-left">
            <h1 className="text-[12vw] sm:text-[8vw] md:text-[5vw] font-['HB'] uppercase leading-none">
              Skills
            </h1>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="md:w-1/2 flex flex-col z-20 gap-8">
          {/* Core Skills */}
          <div>
            <h2 className="text-[5vw] sm:text-[3vw] md:text-[1.5vw] font-semibold mb-4">
              Core Skills
            </h2>
            <div className="flex flex-col gap-4">
              {skillsData.map((s) => (
                <div
                  key={s.name}
                  className="bg-black/40 border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/5 transition-all duration-300"
                >
                  <img
                    className="h-[6vh] sm:h-[5vh] md:h-[3vh] object-contain saturate-0"
                    src={s.image}
                    alt={s.name}
                  />
                  <div className="text-base sm:text-sm font-medium">
                    {s.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Basic Knowledge */}
          <div className="pt-4">
            <h3 className="text-[5vw] sm:text-[3vw] md:text-[1.3vw] font-semibold mb-4">
              Basic
            </h3>
            <div className="flex flex-col gap-4">
              {basicKnowledge.map((s) => (
                <div
                  key={s.name}
                  className="bg-black/40 border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/5 transition-all duration-300"
                >
                  <img
                    className="h-[6vh] sm:h-[5vh] md:h-[3vh] object-contain saturate-0"
                    src={s.image}
                    alt={s.name}
                  />
                  <div className="text-base sm:text-sm font-medium">
                    {s.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
