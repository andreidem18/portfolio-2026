import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Project } from "../data/projects.data";
import gsap from "@/lib/gsap";

interface Params {
  project: Project;
}

export const useProjectItemAnimations = ({ project }: Params) => {

    const projectRef = useRef<HTMLDivElement | null>(null);
  const seeProjectButton = useRef<HTMLAnchorElement | null>(null);

  const gsapClassItem = `project-col-${project.name.toLowerCase().replace(/\s+/g, "-")}`;
  const gsapClassImages = `image-${project.name.toLowerCase().replace(/\s+/g, "-")}`;

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top top",
        end: "+=3500",
        scrub: -1,
        pin: true,
        pinSpacing: true,
      },
    });

    tl.from(
      `.${gsapClassItem}`,
      {
        opacity: 0,
        y: 40,
        stagger: 0.1,
      },
      0,
    );

    tl.fromTo(
      `.${gsapClassImages}`,
      {
        opacity: 0,
        objectPosition: (i) => (i % 2 === 0 ? "20% 30%" : "80% 30%"),
        stagger: 0.2,
      },
      {
        objectPosition: (i) => (i % 2 === 0 ? "80% 30%" : "20% 30%"),
        ease: "none",
        opacity: 1,
        stagger: 0.08,
      },
      0.2,
    );

    tl.fromTo(
      seeProjectButton.current,
      {
        opacity: 0,
        y: 20,
      },
      { opacity: 1, y: 0 },
      1,
    );
  }, []);
  
  return { projectRef, seeProjectButton, gsapClassItem, gsapClassImages };
}
