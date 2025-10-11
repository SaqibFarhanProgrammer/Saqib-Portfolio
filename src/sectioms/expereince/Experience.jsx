import React from "react";

const experiences = [
  {
    company: "Starling Bank",
    tagline: "Award winning digital bank",
    role: "Software Engineer",
    location: "London, United Kingdom",
    industry: "Banking",
    website: "www.starlingbank.com",
    description: `I develop customer-facing features and integrate the design system to ensure a seamless 
    and accessible user experience. Starling Bank is an award-winning, digital challenger bank 
    disrupting the financial services industry with its transparent and customer-focused approach to banking.`,
  },
  {
    company: "Starling Bank",
    tagline: "Award winning digital bank",
    role: "Software Engineer",
    location: "London, United Kingdom",
    industry: "Banking",
    website: "www.starlingbank.com",
    description: `As a member of the Frontend Foundations team working on the Online Bank, 
    I develop customer-facing features and integrate the design system to ensure a seamless 
    and accessible user experience. Starling Bank is an award-winning, digital challenger bank 
    disrupting the financial services industry with its transparent and customer-focused approach to banking.`,
  },
  {
    company: "Crowdhäus",
    tagline: "Property investment platform",
    role: "Frontend Developer",
    location: "Berlin, Germany",
    industry: "Real Estate",
    website: "www.crowdhaus.com",
    description: `Working on modernizing the investment platform UI, building interactive dashboards 
    and improving accessibility and performance for users across Europe.`,
  },
];

const Experience = () => {
  return (
    <section className="w-full min-h-screen z-20 relative bg-transparent text-white px-4 sm:px-6 lg:px-20 py-12">
      <h2 className="text-5xl sm:text-4xl pl-18 md:text-[4vw] font-bold mb-12 text-center sm:text-left max-[531px]:pl-0">EXPERIENCE</h2>

      <div className="flex flex-col gap-12 px-20 max-[531px]:px-2">
        {experiences.map((exp, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left Column */}
            <div className="md:col-span-3">
              <h3 className="text-xl sm:text-2xl font-semibold">{exp.company}</h3>
              <p className="text-white/70 mt-1 text-sm sm:text-base">{exp.tagline}</p>
            </div>

            {/* Middle Column */}
            <div className="md:col-span-3 space-y-1 text-white/80 text-sm sm:text-base">
              <p><span className="font-semibold">Position:</span> {exp.role}</p>
              <p><span className="font-semibold">Location:</span> {exp.location}</p>
              <p><span className="font-semibold">Industry:</span> {exp.industry}</p>
              <p>
                <span className="font-semibold">Website:</span>{" "}
                <a href={`https://${exp.website}`} target="_blank" className="underline">{exp.website}</a>
              </p>
            </div>

            {/* Right Column */}
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
