import React from "react";

export default function Skills() {
  const skillsData = [
    {
      name: "React.js",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Redux Toolkit",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
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
      name: "Tailwind CSS",
      image:
        "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "shadcn/ui",
      image: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
    },
    {
      name: "Figma",
      image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    },
    {
      name: "Git",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    },
    {
      name: "JavaScript",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
  ];

  return (
    <section className="min-h-screen w-full px-6 py-10 sm:px-8 md:px-12 md:py-16 text-white z-10 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12 z-10 relative">
        <div className="md:w-1/2 flex items-start justify-center md:justify-start z-10 relative">
          <div className="w-full md:sticky md:top-24 text-center md:text-left z-10 relative">
            <h1 className="text-[12vw] sm:text-[8vw] md:text-[5vw] font-['HB'] uppercase leading-none z-10 relative">
              Hands On
            </h1>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col gap-8 z-10 relative">
          <div className="z-10 relative">
            <h2 className="text-[5vw] sm:text-[3vw] md:text-[1.5vw] font-semibold mb-4 z-10 relative">
              Core Skills
            </h2>
            <div className="flex flex-col gap-4 z-10 relative">
              {skillsData.map((s) => (
                <div
                  key={s.name}
                  className="bg-black/40 border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/5 transition-all duration-300 z-10 relative"
                >
                  <img
                    className="h-[6vh] sm:h-[5vh] md:h-[3vh] object-contain saturate-0 z-10 relative"
                    src={s.image}
                    alt={s.name}
                  />
                  <div className="text-base sm:text-sm font-medium z-10 relative">
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
