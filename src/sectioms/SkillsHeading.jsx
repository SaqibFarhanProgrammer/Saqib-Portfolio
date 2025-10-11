import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsHeading() {
  const containerRef = useRef(null);
  const stripRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(stripRef.current, {
        xPercent: -50, // smoother and responsive way instead of left: -100%
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom", // animation starts when section enters viewport
          end: "bottom top",   // ends when it leaves
          scrub: 1.5,
          markers: false,      // turn to true for debugging
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full relative h-[25vh] z-20 sm:h-[30vh] md:h-[40vh] px-4 sm:px-10 overflow-hidden flex items-center"
    >
      <div
        ref={stripRef}
        className="skills-strip absolute left-0 top-1/2 -translate-y-1/2 flex gap-10 sm:gap-16 md:gap-20 w-[250%] sm:w-[400%] md:w-[500%]"
        style={{ willChange: "transform" }}
      >
        {Array.from({ length: 10   }).map((_, i) => (
          <h1
            key={i}
            className="uppercase font-['HB'] text-[14vw] sm:text-[10vw] md:text-[8vw] text-white whitespace-nowrap"
          >
            Skills
          </h1>
        ))}
      </div>
    </div>
  );
}
