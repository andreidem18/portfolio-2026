import gsap from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

export const useTitleAnimations = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (!titleRef.current || !sectionRef.current) return;

    const split = SplitText.create(titleRef.current, { type: "words" });
    const brandColor = getComputedStyle(sectionRef.current).backgroundColor;

    gsap.set(sectionRef.current, { backgroundColor: "transparent" });
    gsap.set(split.words, { opacity: 0, y: 40 });

    const enterTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 2,
        start: "top bottom",
        end: "top 30%",
      },
    });

    enterTl
      .to(sectionRef.current, { backgroundColor: brandColor }, 0)
      .to(split.words, { opacity: 1, y: 0, stagger: 0.1 }, 1);

    const exitTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 2,
        start: "top top",
        end: "bottom top",
      },
    });

    exitTl
      .to(split.words, { opacity: 0, y: -40, stagger: 0.1 }, 0)
      .to(sectionRef.current, { backgroundColor: "transparent" }, 1);

    return () => {
      enterTl.scrollTrigger?.kill();
      exitTl.scrollTrigger?.kill();
      enterTl.kill();
      exitTl.kill();
      split.revert();
    };
  }, []);

  return { sectionRef, titleRef };
};
