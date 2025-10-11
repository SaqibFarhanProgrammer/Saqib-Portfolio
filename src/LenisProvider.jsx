import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function LenisApp({ children }) {
  const containerRef = useRef(null);
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let cancelled = false;
    let Lenis = null;

    async function setup() {
      try {
        const mod = await import("@studio-freight/lenis");
        if (cancelled) return;
        Lenis = mod.default || mod.Lenis || mod;
        const scroller = containerRef.current || document.documentElement;

        if (!Lenis) {
          console.error("Lenis import succeeded but exported value is empty:", mod);
          return;
        }

        if (lenisRef.current) return;

        const lenis = new Lenis({
          el: scroller,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
        });
        lenisRef.current = lenis;

        ScrollTrigger.scrollerProxy(scroller, {
          scrollTop(value) {
            if (arguments.length) {
              lenis.scrollTo(value, { immediate: true });
            }
            return (lenis && lenis.scroll && lenis.scroll.instance && lenis.scroll.instance.y) || 0;
          },
          getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          },
          pinType: scroller.style.transform ? "transform" : "fixed",
        });

        lenis.on("scroll", () => {
          ScrollTrigger.update();
        });

        const raf = (time) => {
          lenis.raf(time);
          rafRef.current = requestAnimationFrame(raf);
        };
        rafRef.current = requestAnimationFrame(raf);

        ScrollTrigger.addEventListener("refresh", () => lenis.resize && lenis.resize());
        ScrollTrigger.refresh();
      } catch (err) {
        console.error("Failed to load Lenis or init scroll:", err);
      }
    }

    setup();

    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (lenisRef.current) {
        try { lenisRef.current.destroy(); } catch (e) { /* ignore */ }
      }
      lenisRef.current = null;
      try { ScrollTrigger.kill(); } catch (e) { /* ignore */ }
    };
  }, []);

  return (
    <div ref={containerRef} data-scroll-container className="min-h-screen relative bg-black">
      {children}
    </div>
  );
}
