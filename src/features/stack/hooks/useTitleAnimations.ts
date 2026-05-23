import gsap from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

export const useTitleAnimations = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    if (!titleRef.current) return;

    const split = SplitText.create(titleRef.current, { type: "words" });

    gsap.set(split.words, { opacity: 0, y: 40 });

    const enterTl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        scrub: 2,
        start: "top bottom",
        end: "top 70%",
      },
    });

    enterTl
      .to(split.words, { opacity: 1, y: 0, stagger: 0.1 }, 0.5);

    return () => {
      enterTl.scrollTrigger?.kill();
      enterTl.kill();
      split.revert();
    };
  }, []);

  return { titleRef };
};
