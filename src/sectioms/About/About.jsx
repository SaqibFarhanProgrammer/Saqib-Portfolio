import React, { useEffect, useRef } from "react";
import Button from "../../Mycomponents/Button";
import girdbg from "../../assets/images/sims 4 cc.jfif";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate paragraph spans
      const spans = gsap.utils.toArray(".about-para .span");
      gsap.from(spans, {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".about-para",
          start: "top 75%",
          end: "top 55%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <sections
      ref={root}
      className="relative w-full min-h-screen px-6 sm:px-10 md:px-16 lg:px-24 
      py-12 sm:py-20 md:py-24 bg-transparent grid-bg overflow-hidden text-white 
      flex flex-col justify-center items-center gap-8 sm:gap-10"
    >
      <p
        className="about-para z-10 px-4 sm:px-2 md:px-12 text-center py-10 sm:py-16 md:py-20 
        text-[4.5vw] sm:text-[12vw] md:text-[1.6vw] bg-red-900 lg:text-[2.3vw] 
        leading-[7vw] sm:leading-[5vw] md:leading-[3.2vw]"
      >
        <span className="span font-['italic']">Frontend Developer</span> with{" "}
        <span className="span font-['italic']">hands on experience</span> in
        building <span className="span font-['italic']">modern</span>,{" "}
        <span className="span font-['italic']">responsive</span>, and{" "}
        <span className="span font-['italic']">user friendly</span> web
        applications. Over the course of my journey, I have worked on{" "}
        <span className="span font-['italic']">multiple projects</span> that
        strengthened my expertise in{" "}
        <span className="span font-['italic']">React.js</span> and{" "}
        <span className="span font-['italic']">modern libraries</span>. My focus
        is on writing <span className="span font-['italic']">clean</span>,{" "}
        <span className="span font-['italic']">efficient code</span> and
        delivering designs that balance performance with a seamless{" "}
        <span className="span font-['italic']">user experience.</span>
      </p>

      <div className="about-cta z-10 mt-4 sm:mt-8 md:mt-10 flex justify-center">
        <Button
          label="Contact Me"
          className="px-8 py-3 sm:px-10 sm:py-4 text-[4vw] sm:text-[2vw] md:text-[1.2vw] 
          rounded-full font-semibold transition-all duration-300 bg-white text-black hover:bg-gray-200"
        />
      </div>
    </sections>
  );
}
