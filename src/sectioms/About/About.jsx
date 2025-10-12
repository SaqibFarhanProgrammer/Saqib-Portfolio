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
      className="relative w-full h-[75vh] px-6 sm:px-10 md:px-16 lg:px-24 
      py-12 sm:py-20 md:py-24 bg-transparent grid-bg overflow-hidden text-white 
      flex  justify-center items-center gap-8 sm:gap-10"
    >
      <p
        className="about-para z-10  md:px-12 text-center py-10 sm:py-16 md:py-20 
        text-[4.5vw] sm:text-[13vw] md:text-[1.6vw]  lg:text-[2.3vw] w-[100%]
        leading-[7vw] sm:leading-[5vw] md:leading-[3.2vw] max-[531px]:text-[6vw]"
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

  
    </sections>
  );
}
