import gsap from "@/lib/gsap";
import { useEffect, useRef } from "react";

export const useFooterAnimations = () => {

  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { backgroundPositionY: "0%" },
      {
        backgroundPositionY: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      }
    );

    const nameEl = nameRef.current;
    if (nameEl) {
      const letters = nameEl.querySelectorAll(".letter");
      gsap.fromTo(
        letters,
        { opacity: 0, y: 60, rotateY: 90, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          filter: "blur(0px)",
          stagger: 0.04,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: nameEl,
            start: "top 50%",
            end: "top 20%",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return { containerRef, nameRef };
}
