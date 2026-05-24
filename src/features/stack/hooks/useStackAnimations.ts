import { RefObject, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "@/lib/gsap";

interface Params {
  titleRef: RefObject<HTMLHeadingElement | null>;
}

export const useStackAnimations = ({ titleRef }: Params) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 639px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(
        ".stack-card",
        cardsContainerRef.current,
      );

      cards.forEach((card) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
          },
        });

        tl.from(card, {
          opacity: 0,
          rotationX: 90,
          transformOrigin: "bottom center",
          duration: 0.1,
        });

        tl.fromTo(
          card.querySelectorAll(".stack-card-badge"),
          { opacity: 0, x: 10 },
          { opacity: 1, x: 0, stagger: 0.1 },
        );
      });
    });

    mm.add("(min-width: 640px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(
        ".stack-card",
        cardsContainerRef.current,
      );

      gsap.set(cards, { transformPerspective: 800 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      const circles = gsap.utils.toArray<HTMLElement>(
        ".circle-background",
        sectionRef.current,
      );

      tl.to(circles, { y: -100, duration: 5 }, 0);
      tl.to(titleRef.current, { y: -10, duration: 5 }, 0);

      cards.forEach((card, i) => {
        tl.from(
          card,
          {
            opacity: 0,
            rotationX: 90,
            transformOrigin: "bottom center",
            duration: 0.5,
          },
          i,
        );

        tl.fromTo(
          card.querySelectorAll(".stack-card-badge"),
          { opacity: 0, x: 10 },
          { opacity: 1, x: 0, stagger: 0.1, duration: 0.4 },
          i + 0.1,
        );
      });
    });

    return () => mm.revert();
  }, []);

  return { sectionRef, cardsContainerRef };
};
