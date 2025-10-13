import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImg from "../assets/images/WhatsApp Image 2025-09-26 at 4.54.07 PM.jpeg";

gsap.registerPlugin(ScrollTrigger);

const AboutRoute = () => {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal animation
      const lines = gsap.utils.toArray(".reveal-line");
      gsap.from(lines, {
        y: 40,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
        },
      });

      // Image animation
      gsap.from(".profile-img", {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".profile-img",
          start: "top 85%",
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="about-section relative min-h-screen flex flex-col md:flex-row items-center justify-between gap-16 px-6 md:px-16 lg:px-24 py-24 bg-black text-white overflow-hidden"
    >
      {/* Background lighting effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_80%)]"></div>

      {/* Left - Image */}
      <div className="md:w-1/2 w-full flex justify-center relative z-10">
        <div className="w-[85%] sm:w-[75%] md:w-[80%] overflow-hidden rounded-[2rem] shadow-[0_0_60px_rgba(255,255,255,0.05)] border border-white/10 hover:border-white/20 transition-all duration-500">
          <img
            src={profileImg}
            alt="Shahzaib Khan"
            className="profile-img w-full h-full object-cover rounded-[2rem] hover:scale-[1.03] transition-transform duration-700"
          />
        </div>
      </div>

      {/* Right - Content */}
      <div className="md:w-1/2 w-full relative z-10">
        <h2 className="text-[9vw] sm:text-[6vw] md:text-[3.5vw] font-[HB] uppercase mb-8 tracking-tight">
          About Me
        </h2>

        <div className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed space-y-5">
          <p className="reveal-line">
            Hey, I’m <span className="text-white font-semibold">Shahzaib Khan</span> — a creative designer,
            content creator, and developer who loves building experiences that are{" "}
            <span className="text-white italic">beautiful and meaningful</span>.
          </p>

          <p className="reveal-line">
            I specialize in{" "}
            <span className="text-white font-semibold">
              UI/UX design, video editing, photography, and web development
            </span>
            . My focus is to bring{" "}
            <span className="text-white italic">stories to life through visuals</span>,
            merging creativity with usability.
          </p>

          <p className="reveal-line">
            I’m also the founder of{" "}
            <span className="text-white font-semibold">Elixur</span> — a brand that blends modern jewelry design,
            cinematic storytelling, and digital identity into one cohesive vision.
          </p>

          <p className="reveal-line">
            Beyond screens and software, I love exploring raw street visuals, human emotions, and authentic
            stories — always looking for beauty in simplicity.
          </p>
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-all duration-300 group"
          >
            Let’s Collaborate
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutRoute;
