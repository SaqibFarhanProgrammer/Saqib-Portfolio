import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function Carousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(".text", {
      xPercent: -100,
      repeat: -1,
      ease: "none",
      duration: 20,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="main-cerousel z-10 flex overflow-hidden absolute bottom-4  cerousel  gap-12 text-white text-[10vw]"
    >
      <div className="text whitespace-nowrap flex gap-12 ">
        <h1 className="text-white text-[10vw] leading-none whitespace-nowrap ">
          Saqib farhan -
        </h1>
        <h1 className="text-white text-[10vw] leading-none whitespace-nowrap ">
          Saqib farhan -
        </h1>
      </div>

      <div className="text whitespace-nowrap flex gap-12">
        <h1 className="text-white text-[10vw] leading-none whitespace-nowrap ">
          Saqib farhan -
        </h1>
        <h1 className="text-white text-[10vw] leading-none whitespace-nowrap ">
          Saqib farhan -        </h1>
      </div>
      <div className="text whitespace-nowrap flex gap-12">
        <h1 className="text-white text-[10vw] leading-none whitespace-nowrap ">
          Saqib farhan -        </h1>
        <h1 className="text-white text-[10vw] leading-none whitespace-nowrap ">
          Saqib farhan -        </h1>
      </div>
    </div>
  );
}

export default Carousel;
