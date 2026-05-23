import { useRef } from "react";

import gsap from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

export const useTitleAnimations = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!titleRef.current) return;
    const lines = SplitText.create(titleRef.current, { type: "lines" });
    lines.lines.forEach((line) => {
      gsap.from(line, {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: line,
          start: "top 80%",
          end: "top 70%",
          scrub: 1,
        },
      });
    });
  }, []);

  return { titleRef };
};
