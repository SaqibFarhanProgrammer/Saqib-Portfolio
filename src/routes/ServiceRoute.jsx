import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceData = [
  {
    id: 1,
    title: "Frontend Development",
    image:
      "https://cdn.dribbble.com/userupload/13628136/file/original-1749e1fb283c1f4a540c60694d2c5f99.png?resize=1600x1200&vertical=center",
    description:
      "Building fast, responsive, and dynamic websites using React, Next.js, and modern UI frameworks.",
    points: [
      "Responsive, mobile-first interfaces",
      "Reusable components",
      "Optimized for performance and SEO",
    ],
  },

];

const ServiceRoute = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = sectionRef.current.querySelectorAll(".service-card");

    gsap.fromTo(
      sections,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full relative z-10 min-h-screen  text-white py-20 px-6 md:px-16"
    >
      {/* 🧭 Header */}
      <div className="text-center relative z-10 mb-20">
        <h1 className="text-[9vw] sm:text-[6vw] md:text-[4vw] font-[HB] uppercase tracking-tight leading-none">
          Our Services
        </h1>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-5 leading-relaxed">
          We create digital experiences that blend design and technology — crafted
          for brands that value precision, beauty, and innovation.
        </p>
      </div>

      {/* 🔹 Services Grid */}
      <div className="flex flex-col gap-28">
        {serviceData.map((service, index) => (
          <div
            key={service.id}
            className={`service-card relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* 🖼 Image Section */}
            <div className="md:w-1/2 w-full relative overflow-hidden rounded-3xl group shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[320px] sm:h-[400px] object-cover transform transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </div>

            {/* 📝 Text Section */}
            <div className="md:w-1/2 w-full space-y-6 px-4 sm:px-0">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                {service.title}
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg">
                {service.description}
              </p>
              <ul className="text-gray-300 text-sm sm:text-base space-y-2">
                {service.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 before:content-['•'] before:text-[#888] before:mr-2"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceRoute;
